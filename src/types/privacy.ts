export type LanguageCode = 'id' | 'en' | 'es' | 'ja' | 'zh' | 'de';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
}

export interface PermissionDetail {
  id: string;
  title: string;
  permissionName: string;
  purposeTitle: string;
  purposeDesc: string;
  processingTitle: string;
  processingDesc: string;
  iconType: 'camera' | 'storage' | 'database' | 'vibrate';
  highlightBadge: string;
}

export interface ThirdPartyService {
  name: string;
  role: string;
  purpose: string;
  policyUrl: string;
  badge: string;
}

export interface DataSafetyItem {
  label: string;
  status: string;
  details: string;
  isPositive: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PolicyTranslation {
  language: LanguageCode;
  title: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  welcomeMessage: string;
  acceptanceClause: string;
  meta: {
    appName: string;
    packageName: string;
    developerName: string;
    developerEmail: string;
    versionText: string;
  };
  navigation: {
    overview: string;
    permissions: string;
    thirdParty: string;
    security: string;
    children: string;
    deletion: string;
    changes: string;
    contact: string;
    faq: string;
    dataSafety: string;
  };
  badges: {
    onDevice: string;
    noPii: string;
    offlineDb: string;
    playStoreCompliant: string;
  };
  dataSafetySummary: {
    title: string;
    subtitle: string;
    badge: string;
    items: DataSafetyItem[];
  };
  section1: {
    title: string;
    intro: string;
    noPiiNotice: string;
    items: PermissionDetail[];
  };
  section2: {
    title: string;
    intro: string;
    services: ThirdPartyService[];
    dataCollectedNotice: string;
  };
  section3: {
    title: string;
    content: string;
    bulletPoints: string[];
  };
  section4: {
    title: string;
    content: string;
    guardianNote: string;
  };
  section5: {
    title: string;
    intro: string;
    steps: {
      title: string;
      description: string;
      actionText?: string;
    }[];
  };
  section6: {
    title: string;
    content: string;
  };
  section7: {
    title: string;
    intro: string;
    devNameLabel: string;
    emailLabel: string;
    appNameLabel: string;
    packageLabel: string;
    sendEmailBtn: string;
    copyEmailBtn: string;
    emailCopied: string;
  };
  faqSection: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  ui: {
    searchPlaceholder: string;
    noSearchResults: string;
    printText: string;
    copyLink: string;
    linkCopied: string;
    backToTop: string;
    officialPolicyNotice: string;
    contactUs: string;
    toggleLanguage: string;
    fontSize: string;
    close: string;
    quickStats: string;
  };
}
