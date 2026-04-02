import { HomeActivitiesPreview } from '@/components/home/home-activities-preview';
import { HomeBenefitsPreview } from '@/components/home/home-benefits-preview';
import { HomeContactPreview } from '@/components/home/home-contact-preview';
//import { HomeGalleryStrip } from '@/components/home/home-gallery-strip';
import { HomeGoalsPreview } from '@/components/home/home-goals-preview';
import { HomeHero } from '@/components/home/home-hero';
import { HomeIntro } from '@/components/home/home-intro';
import { HomeMissionPreview } from '@/components/home/home-mission-preview';
import { HomeResourcesPreview } from '@/components/home/home-resources-preview';
import { HomeStoryPreview } from '@/components/home/home-story-preview';

export default function HomePage() {
  return (
    <main className="bg-[#f7f3ea] text-[#243126]">
      <HomeHero />
      <HomeIntro />
      <HomeMissionPreview />
      <HomeGoalsPreview />
      <HomeBenefitsPreview />
      <HomeGalleryStrip />
      <HomeStoryPreview />
      <HomeActivitiesPreview />
      <HomeResourcesPreview />
      <HomeContactPreview />
    </main>
  );
} 