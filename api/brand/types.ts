export interface BrandResult {
  brandUsername: string;
  brandInfo: string;
  brandProfileImage: any;
}

export interface BrandAssignParams {
  brandUsername: string;
  brandInfo: string;
  brandAgreement: boolean;
  brandCategory: string[];
  brandProfileImage: any;
}
