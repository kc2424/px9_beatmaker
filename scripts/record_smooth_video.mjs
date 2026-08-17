import { chromium } from "playwright";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";

async function main() {
  const videosDir = path.resolve("./videos");
  if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
  }

  console.log("Starting Playwright browser recording...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: videosDir,
      size: { width: 1440, height: 900 },
    },
  });

  const page = await context.newPage();

  console.log("Navigating to https://px9beatmaker.vercel.app ...");
  await page.goto("https://px9beatmaker.vercel.app", { waitUntil: "networkidle" });

  // 1. Hero showcase (2.0s)
  console.log("1. Hero showcase...");
  await page.waitForTimeout(2000);

  // Smooth scroll helper
  async function smoothScroll(targetY, durationMs) {
    const steps = 40;
    const stepTime = durationMs / steps;
    const startY = await page.evaluate(() => window.scrollY);
    const distance = targetY - startY;

    for (let i = 1; i <= steps; i++) {
      const progress = i / steps;
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const currentY = startY + distance * ease;
      await page.evaluate((y) => window.scrollTo(0, y), currentY);
      await page.waitForTimeout(stepTime);
    }
  }

  // 2. About Section
  console.log("2. About Section...");
  await smoothScroll(750, 700);
  await page.waitForTimeout(1400);

  // 3. Content Pillars
  console.log("3. Content Pillars...");
  await smoothScroll(1480, 700);
  await page.waitForTimeout(1500);

  // 4. Live Sound System
  console.log("4. Live Sound System...");
  await smoothScroll(2250, 700);
  await page.waitForTimeout(1500);

  // 5. Selected Work (Bone Inversion)
  console.log("5. Selected Work...");
  await smoothScroll(3050, 700);
  await page.waitForTimeout(1500);

  // 6. Contact Section
  console.log("6. Contact Section...");
  await smoothScroll(3900, 700);
  await page.waitForTimeout(1500);

  // 7. Scroll back to top
  console.log("7. Fast scroll back to top...");
  await smoothScroll(0, 900);
  await page.waitForTimeout(800);

  // 8. Open Menu Overlay
  console.log("8. Opening Menu Overlay...");
  const menuBtn = page.getByRole("button", { name: "MENU" });
  if (await menuBtn.isVisible()) {
    await menuBtn.click();
    await page.waitForTimeout(1800);
    const closeBtn = page.getByRole("button", { name: /CLOSE/i });
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(1000);
    }
  }

  // 9. Extra settling buffer
  console.log("9. Settling buffer...");
  await page.waitForTimeout(1500);

  const video = page.video();
  await page.close();
  await context.close();
  await browser.close();

  const webmPath = path.resolve("./videos/temp_record.webm");
  await video.saveAs(webmPath);
  console.log("WebM saved successfully:", webmPath);

  const outMp4 = path.resolve("./px9_demo_clean.mp4");
  const downloadsMp4 = path.join(os.homedir(), "Downloads", "px9_demo.mp4");

  console.log("Converting WebM to high-quality H.264 MP4 with ffmpeg...");
  execSync(
    `ffmpeg -y -i "${webmPath}" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -movflags +faststart "${outMp4}"`,
    { stdio: "inherit" }
  );

  fs.copyFileSync(outMp4, downloadsMp4);
  console.log(`\n🎉 COMPLETED! High quality video saved to:\n- Project: ${outMp4}\n- Downloads: ${downloadsMp4}`);
}

main().catch(console.error);
