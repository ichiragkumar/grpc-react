// package: coupon
// file: coupon_stream.proto

import * as jspb from "google-protobuf";

export class StatusFilter extends jspb.Message {
  clearStatusesList(): void;
  getStatusesList(): Array<string>;
  setStatusesList(value: Array<string>): void;
  addStatuses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StatusFilter): StatusFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusFilter;
  static deserializeBinaryFromReader(message: StatusFilter, reader: jspb.BinaryReader): StatusFilter;
}

export namespace StatusFilter {
  export type AsObject = {
    statusesList: Array<string>,
  }
}

export class CouponIssue extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDrawid(): string;
  setDrawid(value: string): void;

  getBusinesscontractid(): string;
  setBusinesscontractid(value: string): void;

  getDeliveryavailable(): boolean;
  setDeliveryavailable(value: boolean): void;

  getDeliverycontactphone(): string;
  setDeliverycontactphone(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getDescriptionfile(): string;
  setDescriptionfile(value: string): void;

  getActiveat(): string;
  setActiveat(value: string): void;

  getEndat(): string;
  setEndat(value: string): void;

  getExpireat(): string;
  setExpireat(value: string): void;

  clearZoneidsList(): void;
  getZoneidsList(): Array<string>;
  setZoneidsList(value: Array<string>): void;
  addZoneids(value: string, index?: number): string;

  getInitialamount(): number;
  setInitialamount(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getPurchasepriceamount(): number;
  setPurchasepriceamount(value: number): void;

  getDiscountamount(): number;
  setDiscountamount(value: number): void;

  getSellpriceamount(): number;
  setSellpriceamount(value: number): void;

  getTicketpriceamount(): number;
  setTicketpriceamount(value: number): void;

  getGranddrawmultiplier(): number;
  setGranddrawmultiplier(value: number): void;

  getCouponssource(): string;
  setCouponssource(value: string): void;

  getCouponscsvpath(): string;
  setCouponscsvpath(value: string): void;

  getAdditionalcouponscsvpath(): string;
  setAdditionalcouponscsvpath(value: string): void;

  getArrangement(): number;
  setArrangement(value: number): void;

  getCouponsprefix(): string;
  setCouponsprefix(value: string): void;

  getBusinessid(): string;
  setBusinessid(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getType(): string;
  setType(value: string): void;

  getAmountexpired(): number;
  setAmountexpired(value: number): void;

  getAdditionalamount(): number;
  setAdditionalamount(value: number): void;

  getLastincrid(): number;
  setLastincrid(value: number): void;

  getNextcodeincrid(): number;
  setNextcodeincrid(value: number): void;

  getRawpath(): string;
  setRawpath(value: string): void;

  getRestrictions(): string;
  setRestrictions(value: string): void;

  clearMethodsofredemptionList(): void;
  getMethodsofredemptionList(): Array<string>;
  setMethodsofredemptionList(value: Array<string>): void;
  addMethodsofredemption(value: string, index?: number): string;

  getAmountused(): number;
  setAmountused(value: number): void;

  getAmountsold(): number;
  setAmountsold(value: number): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  clearRestrictedbranchidsList(): void;
  getRestrictedbranchidsList(): Array<string>;
  setRestrictedbranchidsList(value: Array<string>): void;
  addRestrictedbranchids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouponIssue.AsObject;
  static toObject(includeInstance: boolean, msg: CouponIssue): CouponIssue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CouponIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouponIssue;
  static deserializeBinaryFromReader(message: CouponIssue, reader: jspb.BinaryReader): CouponIssue;
}

export namespace CouponIssue {
  export type AsObject = {
    id: string,
    drawid: string,
    businesscontractid: string,
    deliveryavailable: boolean,
    deliverycontactphone: string,
    title: string,
    image: string,
    descriptionfile: string,
    activeat: string,
    endat: string,
    expireat: string,
    zoneidsList: Array<string>,
    initialamount: number,
    currency: string,
    purchasepriceamount: number,
    discountamount: number,
    sellpriceamount: number,
    ticketpriceamount: number,
    granddrawmultiplier: number,
    couponssource: string,
    couponscsvpath: string,
    additionalcouponscsvpath: string,
    arrangement: number,
    couponsprefix: string,
    businessid: string,
    createdat: string,
    type: string,
    amountexpired: number,
    additionalamount: number,
    lastincrid: number,
    nextcodeincrid: number,
    rawpath: string,
    restrictions: string,
    methodsofredemptionList: Array<string>,
    amountused: number,
    amountsold: number,
    streamtype: number,
    status: string,
    restrictedbranchidsList: Array<string>,
  }
}

export class UserFilter extends jspb.Message {
  hasLanguagecode(): boolean;
  clearLanguagecode(): void;
  getLanguagecode(): string;
  setLanguagecode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserFilter): UserFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFilter;
  static deserializeBinaryFromReader(message: UserFilter, reader: jspb.BinaryReader): UserFilter;
}

export namespace UserFilter {
  export type AsObject = {
    languagecode: string,
  }
}

export class User extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userid: string,
  }
}

export class UserPrefrences extends jspb.Message {
  hasLanguagecode(): boolean;
  clearLanguagecode(): void;
  getLanguagecode(): string;
  setLanguagecode(value: string): void;

  hasBrightness(): boolean;
  clearBrightness(): void;
  getBrightness(): string;
  setBrightness(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPrefrences.AsObject;
  static toObject(includeInstance: boolean, msg: UserPrefrences): UserPrefrences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPrefrences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPrefrences;
  static deserializeBinaryFromReader(message: UserPrefrences, reader: jspb.BinaryReader): UserPrefrences;
}

export namespace UserPrefrences {
  export type AsObject = {
    languagecode: string,
    brightness: string,
  }
}

export class MoreCouponRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getCouponissueid(): string;
  setCouponissueid(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getParentid(): string;
  setParentid(value: string): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoreCouponRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoreCouponRequest): MoreCouponRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoreCouponRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoreCouponRequest;
  static deserializeBinaryFromReader(message: MoreCouponRequest, reader: jspb.BinaryReader): MoreCouponRequest;
}

export namespace MoreCouponRequest {
  export type AsObject = {
    id: string,
    userid: string,
    couponissueid: string,
    createdat: string,
    parentid: string,
    streamtype: number,
  }
}

export class EmptyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
  }
}

export class ActiveBusinessesStreamResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  addCategories(value: string, index?: number): string;

  getBusinessid(): string;
  setBusinessid(value: string): void;

  getContracttype(): string;
  setContracttype(value: string): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  getLogo(): string;
  setLogo(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getSponsorshiptype(): string;
  setSponsorshiptype(value: string): void;

  getSuspended(): boolean;
  setSuspended(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveBusinessesStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveBusinessesStreamResponse): ActiveBusinessesStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveBusinessesStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveBusinessesStreamResponse;
  static deserializeBinaryFromReader(message: ActiveBusinessesStreamResponse, reader: jspb.BinaryReader): ActiveBusinessesStreamResponse;
}

export namespace ActiveBusinessesStreamResponse {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    image: string,
    categoriesList: Array<string>,
    businessid: string,
    contracttype: string,
    streamtype: number,
    logo: string,
    createdat: string,
    sponsorshiptype: string,
    suspended: boolean,
  }
}

export class ActiveCouponStreamResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRedemptioninfo(): boolean;
  clearRedemptioninfo(): void;
  getRedemptioninfo(): RedemptionInfo | undefined;
  setRedemptioninfo(value?: RedemptionInfo): void;

  getCode(): string;
  setCode(value: string): void;

  getBusinessid(): string;
  setBusinessid(value: string): void;

  getCouponissueid(): string;
  setCouponissueid(value: string): void;

  getRedeemedbyselfactivation(): boolean;
  setRedeemedbyselfactivation(value: boolean): void;

  getPurchaseprice(): number;
  setPurchaseprice(value: number): void;

  getPurchasecurrency(): string;
  setPurchasecurrency(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getExpireat(): string;
  setExpireat(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getPurchasedat(): string;
  setPurchasedat(value: string): void;

  getSellpriceamount(): number;
  setSellpriceamount(value: number): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveCouponStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveCouponStreamResponse): ActiveCouponStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveCouponStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveCouponStreamResponse;
  static deserializeBinaryFromReader(message: ActiveCouponStreamResponse, reader: jspb.BinaryReader): ActiveCouponStreamResponse;
}

export namespace ActiveCouponStreamResponse {
  export type AsObject = {
    id: string,
    redemptioninfo?: RedemptionInfo.AsObject,
    code: string,
    businessid: string,
    couponissueid: string,
    redeemedbyselfactivation: boolean,
    purchaseprice: number,
    purchasecurrency: string,
    userid: string,
    status: string,
    expireat: string,
    createdat: string,
    purchasedat: string,
    sellpriceamount: number,
    streamtype: number,
  }
}

export class CouponIssueWithBusiness extends jspb.Message {
  getCouponissueid(): string;
  setCouponissueid(value: string): void;

  getBusinessid(): string;
  setBusinessid(value: string): void;

  getCouponname(): string;
  setCouponname(value: string): void;

  getBusinessname(): string;
  setBusinessname(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  addCategories(value: string, index?: number): string;

  getEndsat(): string;
  setEndsat(value: string): void;

  getAmountleft(): number;
  setAmountleft(value: number): void;

  getType(): string;
  setType(value: string): void;

  getPriceamount(): number;
  setPriceamount(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getDrawid(): string;
  setDrawid(value: string): void;

  getSellpriceamount(): number;
  setSellpriceamount(value: number): void;

  clearRestrictedbranchidsList(): void;
  getRestrictedbranchidsList(): Array<string>;
  setRestrictedbranchidsList(value: Array<string>): void;
  addRestrictedbranchids(value: string, index?: number): string;

  clearDrawnumbersList(): void;
  getDrawnumbersList(): Array<string>;
  setDrawnumbersList(value: Array<string>): void;
  addDrawnumbers(value: string, index?: number): string;

  getDescriptionfile(): string;
  setDescriptionfile(value: string): void;

  getPurchasepriceamount(): number;
  setPurchasepriceamount(value: number): void;

  getArrangement(): number;
  setArrangement(value: number): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouponIssueWithBusiness.AsObject;
  static toObject(includeInstance: boolean, msg: CouponIssueWithBusiness): CouponIssueWithBusiness.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CouponIssueWithBusiness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouponIssueWithBusiness;
  static deserializeBinaryFromReader(message: CouponIssueWithBusiness, reader: jspb.BinaryReader): CouponIssueWithBusiness;
}

export namespace CouponIssueWithBusiness {
  export type AsObject = {
    couponissueid: string,
    businessid: string,
    couponname: string,
    businessname: string,
    status: string,
    logo: string,
    categoriesList: Array<string>,
    endsat: string,
    amountleft: number,
    type: string,
    priceamount: number,
    currency: string,
    drawid: string,
    sellpriceamount: number,
    restrictedbranchidsList: Array<string>,
    drawnumbersList: Array<string>,
    descriptionfile: string,
    purchasepriceamount: number,
    arrangement: number,
    streamtype: number,
  }
}

export class RedemptionInfo extends jspb.Message {
  getRedeemedbybusinessmanagerid(): string;
  setRedeemedbybusinessmanagerid(value: string): void;

  getMethodofredemption(): string;
  setMethodofredemption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedemptionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RedemptionInfo): RedemptionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RedemptionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedemptionInfo;
  static deserializeBinaryFromReader(message: RedemptionInfo, reader: jspb.BinaryReader): RedemptionInfo;
}

export namespace RedemptionInfo {
  export type AsObject = {
    redeemedbybusinessmanagerid: string,
    methodofredemption: string,
  }
}

export class Balance extends jspb.Message {
  getUsd(): number;
  setUsd(value: number): void;

  getEgp(): number;
  setEgp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    usd: number,
    egp: number,
  }
}

export class WalletBalanceResponse extends jspb.Message {
  hasAvailablebalances(): boolean;
  clearAvailablebalances(): void;
  getAvailablebalances(): Balance | undefined;
  setAvailablebalances(value?: Balance): void;

  hasBlockedbalances(): boolean;
  clearBlockedbalances(): void;
  getBlockedbalances(): Balance | undefined;
  setBlockedbalances(value?: Balance): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceResponse): WalletBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WalletBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceResponse;
  static deserializeBinaryFromReader(message: WalletBalanceResponse, reader: jspb.BinaryReader): WalletBalanceResponse;
}

export namespace WalletBalanceResponse {
  export type AsObject = {
    availablebalances?: Balance.AsObject,
    blockedbalances?: Balance.AsObject,
    streamtype: number,
  }
}

export class SpecialEvent extends jspb.Message {
  getCardcolor(): string;
  setCardcolor(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getShortdescription(): string;
  setShortdescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecialEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SpecialEvent): SpecialEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecialEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecialEvent;
  static deserializeBinaryFromReader(message: SpecialEvent, reader: jspb.BinaryReader): SpecialEvent;
}

export namespace SpecialEvent {
  export type AsObject = {
    cardcolor: string,
    title: string,
    shortdescription: string,
  }
}

export class ActiveDrawnResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getContractId(): string;
  setContractId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSubtype(): string;
  setSubtype(value: string): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getOpenAt(): string;
  setOpenAt(value: string): void;

  getPredrawStartAt(): string;
  setPredrawStartAt(value: string): void;

  getDrawStartAt(): string;
  setDrawStartAt(value: string): void;

  getContestsStartAt(): string;
  setContestsStartAt(value: string): void;

  getDescriptionFile(): string;
  setDescriptionFile(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getAmountOfNumbersByParticipant(): number;
  setAmountOfNumbersByParticipant(value: number): void;

  hasGrandDrawFreeTicketSpendingsAmount(): boolean;
  clearGrandDrawFreeTicketSpendingsAmount(): void;
  getGrandDrawFreeTicketSpendingsAmount(): number;
  setGrandDrawFreeTicketSpendingsAmount(value: number): void;

  getDrawNumbersCount(): number;
  setDrawNumbersCount(value: number): void;

  getParticipantsCount(): number;
  setParticipantsCount(value: number): void;

  getAmountOfChosenNumbers(): number;
  setAmountOfChosenNumbers(value: number): void;

  getTotalPrizesValue(): number;
  setTotalPrizesValue(value: number): void;

  getTotalPrizesAmount(): number;
  setTotalPrizesAmount(value: number): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasSpecialevent(): boolean;
  clearSpecialevent(): void;
  getSpecialevent(): SpecialEvent | undefined;
  setSpecialevent(value?: SpecialEvent): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveDrawnResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveDrawnResponse): ActiveDrawnResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveDrawnResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveDrawnResponse;
  static deserializeBinaryFromReader(message: ActiveDrawnResponse, reader: jspb.BinaryReader): ActiveDrawnResponse;
}

export namespace ActiveDrawnResponse {
  export type AsObject = {
    id: string,
    contractId: string,
    businessId: string,
    type: string,
    subtype: string,
    currency: string,
    title: string,
    openAt: string,
    predrawStartAt: string,
    drawStartAt: string,
    contestsStartAt: string,
    descriptionFile: string,
    logo: string,
    amountOfNumbersByParticipant: number,
    grandDrawFreeTicketSpendingsAmount: number,
    drawNumbersCount: number,
    participantsCount: number,
    amountOfChosenNumbers: number,
    totalPrizesValue: number,
    totalPrizesAmount: number,
    createdAt: string,
    status: string,
    specialevent?: SpecialEvent.AsObject,
    streamtype: number,
  }
}

export class TicketStreamResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getDrawid(): string;
  setDrawid(value: string): void;

  getDrawtype(): string;
  setDrawtype(value: string): void;

  getIsdrawclosed(): boolean;
  setIsdrawclosed(value: boolean): void;

  clearDrawnumbersList(): void;
  getDrawnumbersList(): Array<string>;
  setDrawnumbersList(value: Array<string>): void;
  addDrawnumbers(value: string, index?: number): string;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getWinningdrawnumber(): string;
  setWinningdrawnumber(value: string): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TicketStreamResponse): TicketStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketStreamResponse;
  static deserializeBinaryFromReader(message: TicketStreamResponse, reader: jspb.BinaryReader): TicketStreamResponse;
}

export namespace TicketStreamResponse {
  export type AsObject = {
    id: string,
    userid: string,
    drawid: string,
    drawtype: string,
    isdrawclosed: boolean,
    drawnumbersList: Array<string>,
    createdat: string,
    status: string,
    winningdrawnumber: string,
    streamtype: number,
  }
}

export class Location extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class ZoneStreamResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getIsdefault(): boolean;
  setIsdefault(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneStreamResponse): ZoneStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoneStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneStreamResponse;
  static deserializeBinaryFromReader(message: ZoneStreamResponse, reader: jspb.BinaryReader): ZoneStreamResponse;
}

export namespace ZoneStreamResponse {
  export type AsObject = {
    id: string,
    country: string,
    createdat: string,
    isdefault: boolean,
    name: string,
    location?: Location.AsObject,
    streamtype: number,
  }
}

export class OpeningHours extends jspb.Message {
  getOpentime(): string;
  setOpentime(value: string): void;

  getClosetime(): string;
  setClosetime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpeningHours.AsObject;
  static toObject(includeInstance: boolean, msg: OpeningHours): OpeningHours.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpeningHours, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpeningHours;
  static deserializeBinaryFromReader(message: OpeningHours, reader: jspb.BinaryReader): OpeningHours;
}

export namespace OpeningHours {
  export type AsObject = {
    opentime: string,
    closetime: string,
  }
}

export class BusinessBranchStreamResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBusinesssuspended(): boolean;
  setBusinesssuspended(value: boolean): void;

  getShortaddress(): string;
  setShortaddress(value: string): void;

  getBusinessid(): string;
  setBusinessid(value: string): void;

  getZoneid(): string;
  setZoneid(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  getOpeninghoursMap(): jspb.Map<string, OpeningHours>;
  clearOpeninghoursMap(): void;
  getCreatedat(): string;
  setCreatedat(value: string): void;

  clearContracttypesList(): void;
  getContracttypesList(): Array<string>;
  setContracttypesList(value: Array<string>): void;
  addContracttypes(value: string, index?: number): string;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessBranchStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessBranchStreamResponse): BusinessBranchStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusinessBranchStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessBranchStreamResponse;
  static deserializeBinaryFromReader(message: BusinessBranchStreamResponse, reader: jspb.BinaryReader): BusinessBranchStreamResponse;
}

export namespace BusinessBranchStreamResponse {
  export type AsObject = {
    id: string,
    businesssuspended: boolean,
    shortaddress: string,
    businessid: string,
    zoneid: string,
    location?: Location.AsObject,
    openinghoursMap: Array<[string, OpeningHours.AsObject]>,
    createdat: string,
    contracttypesList: Array<string>,
    streamtype: number,
  }
}

export class UserCartStreamItem extends jspb.Message {
  getItemid(): string;
  setItemid(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPurchaseprice(): number;
  setPurchaseprice(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasFeeprice(): boolean;
  clearFeeprice(): void;
  getFeeprice(): number;
  setFeeprice(value: number): void;

  hasTaxamount(): boolean;
  clearTaxamount(): void;
  getTaxamount(): number;
  setTaxamount(value: number): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCartStreamItem.AsObject;
  static toObject(includeInstance: boolean, msg: UserCartStreamItem): UserCartStreamItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserCartStreamItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCartStreamItem;
  static deserializeBinaryFromReader(message: UserCartStreamItem, reader: jspb.BinaryReader): UserCartStreamItem;
}

export namespace UserCartStreamItem {
  export type AsObject = {
    itemid: string,
    amount: number,
    purchaseprice: number,
    currency: string,
    feeprice: number,
    taxamount: number,
    streamtype: number,
  }
}

export class UserCartStreamResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<UserCartStreamItem>;
  setItemsList(value: Array<UserCartStreamItem>): void;
  addItems(value?: UserCartStreamItem, index?: number): UserCartStreamItem;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCartStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserCartStreamResponse): UserCartStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserCartStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCartStreamResponse;
  static deserializeBinaryFromReader(message: UserCartStreamResponse, reader: jspb.BinaryReader): UserCartStreamResponse;
}

export namespace UserCartStreamResponse {
  export type AsObject = {
    itemsList: Array<UserCartStreamItem.AsObject>,
    streamtype: number,
  }
}

export class MainUser extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  hasUserprefrences(): boolean;
  clearUserprefrences(): void;
  getUserprefrences(): UserPrefrences | undefined;
  setUserprefrences(value?: UserPrefrences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MainUser.AsObject;
  static toObject(includeInstance: boolean, msg: MainUser): MainUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MainUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MainUser;
  static deserializeBinaryFromReader(message: MainUser, reader: jspb.BinaryReader): MainUser;
}

export namespace MainUser {
  export type AsObject = {
    userid: string,
    userprefrences?: UserPrefrences.AsObject,
  }
}

export class UserNotificationStreamResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIsread(): boolean;
  setIsread(value: boolean): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  hasScreen(): boolean;
  clearScreen(): void;
  getScreen(): string;
  setScreen(value: string): void;

  hasUserid(): boolean;
  clearUserid(): void;
  getUserid(): string;
  setUserid(value: string): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNotificationStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserNotificationStreamResponse): UserNotificationStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserNotificationStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNotificationStreamResponse;
  static deserializeBinaryFromReader(message: UserNotificationStreamResponse, reader: jspb.BinaryReader): UserNotificationStreamResponse;
}

export namespace UserNotificationStreamResponse {
  export type AsObject = {
    id: string,
    isread: boolean,
    createdat: string,
    title: string,
    body: string,
    topic: string,
    screen: string,
    userid: string,
    streamtype: number,
  }
}

export class EnvironmentResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAllowinvites(): string;
  setAllowinvites(value: string): void;

  getAllowinviteall(): string;
  setAllowinviteall(value: string): void;

  getStage(): string;
  setStage(value: string): void;

  getDeleteunsentreports(): string;
  setDeleteunsentreports(value: string): void;

  getUsecrashlytics(): string;
  setUsecrashlytics(value: string): void;

  getAuditlogscredentials(): string;
  setAuditlogscredentials(value: string): void;

  getRequiredminimumandroidversion(): string;
  setRequiredminimumandroidversion(value: string): void;

  getRequiredminimumiosversion(): string;
  setRequiredminimumiosversion(value: string): void;

  getDeleteandroidunsentreports(): string;
  setDeleteandroidunsentreports(value: string): void;

  getDeleteiosunsentreports(): string;
  setDeleteiosunsentreports(value: string): void;

  getUseandroidcrashlytics(): string;
  setUseandroidcrashlytics(value: string): void;

  getUseioscrashlytics(): string;
  setUseioscrashlytics(value: string): void;

  getStreamtype(): number;
  setStreamtype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnvironmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnvironmentResponse): EnvironmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnvironmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnvironmentResponse;
  static deserializeBinaryFromReader(message: EnvironmentResponse, reader: jspb.BinaryReader): EnvironmentResponse;
}

export namespace EnvironmentResponse {
  export type AsObject = {
    id: string,
    allowinvites: string,
    allowinviteall: string,
    stage: string,
    deleteunsentreports: string,
    usecrashlytics: string,
    auditlogscredentials: string,
    requiredminimumandroidversion: string,
    requiredminimumiosversion: string,
    deleteandroidunsentreports: string,
    deleteiosunsentreports: string,
    useandroidcrashlytics: string,
    useioscrashlytics: string,
    streamtype: number,
  }
}

