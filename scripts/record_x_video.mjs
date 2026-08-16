import { chromium } from "playwright";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

async function main() {
  const videosDir = path.resolve("./videos");
  if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
  }

  console.log("Launching Chromium browser for high-definition video recording...");
  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: videosDir,
      size: { width: 1440, height: 900 },
    },
  });

  const page = await context.newPage();
  const videoObj = page.video();

  console.log("Navigating to https://px9beatmaker.vercel.app ...");
  await page.goto("https://px9beatmaker.vercel.app", { waitUntil: "networkidle" });

  // 1. Hero Section Showcase (3s)
  console.log("1/7 Showcasing Hero Section...");
  await page.waitForTimeout(3000);

  // Smooth scroll helper
  async function smoothScroll(targetY, durationMs) {
    const steps = 60;
    const stepTime = durationMs / steps;
    const startY = await page.evaluate(() => window.scrollY);
    const distance = targetY - startY;

    for (let i = 1; i <= steps; i++) {
      const progress = i / steps;
      // easeInOutCubic
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const currentY = startY + distance * ease;
      await page.evaluate((y) => window.scrollTo(0, y), currentY);
      await page.waitForTimeout(stepTime);
    }
  }

  // 2. About Section
  console.log("2/7 Scrolling to About Section...");
  await smoothScroll(750, 1200);
  await page.waitForTimeout(2500);

  // 3. Content Pillars (3 cards)
  console.log("3/7 Scrolling to Content Pillars...");
  await smoothScroll(1500, 1200);
  await page.waitForTimeout(2500);

  // 4. Live Sound System (Hardware Live)
  console.log("4/7 Scrolling to Live Sound System...");
  await smoothScroll(2300, 1200);
  await page.waitForTimeout(2500);

  // 5. Selected Work (Bone Inversion)
  console.log("5/7 Scrolling to Selected Work...");
  await smoothScroll(3100, 1200);
  await page.waitForTimeout(2500);

  // 6. Contact Section (Studio Rack Ambient)
  console.log("6/7 Scrolling to Contact Section...");
  await smoothScroll(4000, 1200);
  await page.waitForTimeout(2000);

  // 7. Scroll back to top & open Navigation Overlay
  console.log("7/7 Scrolling to top and opening Navigation Menu...");
  await smoothScroll(0, 1500);
  await page.waitForTimeout(1000);

  const menuBtn = page.getByRole("button", { name: "MENU" });
  if (await menuBtn.isVisible()) {
    await menuBtn.click();
    await page.waitForTimeout(2500);
    const closeBtn = page.getByRole("button", { name: /CLOSE/i });
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(1000);
    }
  }

  console.log("Closing page and context to finalize video stream...");
  await page.close();
  await context.close();
  await browser.close();

  const savedVideoPath = await videoObj.path();
  console.log(`Raw video saved to: ${savedVideoPath}`);

  const outputMp4 = path.resolve("./px9_x_demo.mp4");
  const downloadsMp4 = "C:\\Users\\0124o\\Downloads\\px9_x_demo.mp4";

  console.log("Converting WebM to X-optimized H.264 MP4...");
  execSync(
    `ffmpeg -y -i "${savedVideoPath}" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -movflags +faststart "${outputMp4}"`,
    { stdio: "inherit" }
  );

  fs.copyFileSync(outputMp4, downloadsMp4);

  console.log(`\n🎉 COMPLETED! High quality video saved to:\n- Project: ${outputMp4}\n- Downloads: ${downloadsMp4}`);
}

main().catch(console.error);
