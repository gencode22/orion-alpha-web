/**
 * Shared Type Definitions
 */

export interface NavLink {
  name: string;
  href: string;
  isHash?: boolean;
  external?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  tagline: string;
  subtext: string;
  features: TierFeature[];
  isHighlight?: boolean;
  isPro?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface TierFeature {
  text: string;
  isOn: boolean;
  isStrong?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureModalSection {
  title: string;
  items: string[];
}

export interface FeatureModalData {
  eyebrow: string;
  title: string;
  intro: string;
  sections: FeatureModalSection[];
  cta?: { label: string; href: string };
}
