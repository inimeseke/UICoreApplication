




export type CBReferenceID = string;


export interface CBLanguageItem {
    
    value: string;
    languageKey: string;
    itemKey: string;
    
}


export interface LanguagesData {
    [key: string]: {
        [key: string]: string;
    };
}





export interface CBFinancialAmount {
    
    amount: number;
    currency: string;
    
}


export interface CBLocalizedTextObject {
    
    [key: string]: string
    
}


export interface CBDropdownData<T> {
    
    _id: CBReferenceID;
    name?: CBLocalizedTextObject;
    dropdownCode: string;
    data: CBDropdownDataItem<T>[];
    
}


export interface CBDropdownDataItem<T> {
    
    _id: CBReferenceID;
    title: CBLocalizedTextObject;
    rowsData?: CBDropdownDataItem<T>[]
    isADropdownDataSection: boolean;
    isADropdownDataRow: boolean;
    
    attachedObject: T
    
    itemCode: string;
    dropdownCode: string;
    
}







export interface CBFileAccessor {
    
    fileData: CBFileData;
    createdAt: number;
    
}


export interface CBFileData {
    
    _id: string;
    
    name: string;
    dataURL: string;
    type: string;
    isLimitedAccess?: boolean;
    accessibleToUsers?: CBUserProfilePublic[];
    
}

export enum CBAuthenticationSource {
    
    google = 10,
    facebook = 11,
    emailAccessLink = 200,
    password = 220,
    inquiryAccessLink = 500
    
}

// AsdAsd

export interface CBCoreInitializer {
    
    languageValues: LanguagesData;
    defaultLanguageKey: string;
    
}

export interface CBLoginKey {
    
    key: string;
    
    accessToken: string;
    
    storeAccessTokenInClient: boolean;
    
    authenticationSource: CBAuthenticationSource;
    
    userID: CBReferenceID;
    
    isValid: boolean;
    
    loginDate?: Date;
    logoutDate?: Date;
    
    createdAt: Date;
    updatedAt: Date;
    
}

export interface CBUserPassword {
    
    passwordHash: string;
    
    userID: CBReferenceID;
    
    isValid: boolean;
    
    createdAt: Date;
    updatedAt: Date;
    
}

export interface CBAdministratorRightsDescriptor {
    
    userProfile: CBUserProfile;
    
}

export interface CBSubscription {
    
    _id: CBReferenceID;
    startDate: Date;
    endDate?: Date;
    
    isIndefinite: boolean;
    
    subscriptionKind: number;// alternatiiv oleks string/objectId, mis viitaks tüübi objektile eraldi tabelis
    createdAt: Date;
    updatedAt: Date;
    
}

//Asdasd

export type CBUserProfilePublic = any;
export type CBUserProfile = any;





export interface SocketClientInterface {
    
    [x: string]: SocketClientFunction<any, any>;
    
    
    
    
    // Internal settings controller
    
    AreCBInternalSettingsAvailableForCurrentUser: SocketClientNoMessageFunction<boolean>
    
    RetrieveLanguageData: SocketClientNoMessageFunction<LanguagesData>;
    DeleteLanguageWithKey: SocketClientFunction<string, LanguagesData>;
    SaveLanguagesData: SocketClientFunction<LanguagesData, LanguagesData>;
    
    RetrieveDropdownCodes: SocketClientNoMessageFunction<string[]>;
    DeleteDropdownDataForCode: SocketClientFunction<string, null>;
    RetrieveDropdownDataForCode: SocketClientFunction<string, CBDropdownData<any>>;
    SaveDropdownData: SocketClientFunction<CBDropdownData<any>, CBDropdownData<any>>;
    
}


export interface SocketClientResult<ResultType> {
    
    responseMessage: any;
    result: ResultType;
    errorResult: any;
    respondWithMessage: CBSocketMessageSendResponseFunction;
    
}


export type SocketClientFunction<MessageType, ResultType> = (
    messageData: MessageType,
    completionPolicy?: string,
    isUserBound?: boolean
) => Promise<SocketClientResult<ResultType>>;

export type SocketClientNoMessageFunction<ResultType> = (
    messageData?: null,
    completionPolicy?: string,
    isUserBound?: boolean
) => Promise<SocketClientResult<ResultType>>;





export interface CBSocketMultipleMessageObject<MessageDataType = any> {
    
    key: string;
    message: CBSocketMessage<MessageDataType>;
    
}


// CBSocket communication messages
export interface CBSocketMessage<MessageDataType = any> {
    
    identifier: string;
    inResponseToIdentifier?: string;
    keepWaitingForResponses?: boolean;
    
    messageData: MessageDataType;
    
    // This is sent from client to server with requests
    storedResponseHash?: string;
    
    // This is always present on messages sent from the server side
    messageDataHash?: string;
    
    // This tells the client to store this message for future use
    canBeStoredAsResponse?: boolean;
    
    // This tells the client to use the previously stored response
    useStoredResponse?: boolean;
    
    // This tells the client that the response is valid for at least this long in ms
    responseValidityDuration?: number;
    
}


export interface CBSocketMultipleMessage extends CBSocketMessage<CBSocketMultipleMessageObject[]> {
    
    shouldGroupResponses: boolean;
    
}


export type CBSocketMessageSendResponseFunctionBase<ResponseMessageType> = (
    responseMessage: ResponseMessageType,
    completion?: CBSocketMessageCompletionFunction
) => Promise<string>;

export type CBSocketMessageCompletionFunction = (
    responseMessage: any,
    respondWithMessage: CBSocketMessageSendResponseFunction
) => void;
export type CBSocketMessageHandlerFunction<ResponseMessageType = any> = (
    message: any,
    respondWithMessage: CBSocketMessageSendResponseFunction<ResponseMessageType>
) => void;

export type CBSocketMultipleMessagecompletionFunction = (
    responseMessages: any[],
    callcompletionFunctions: () => void
) => void;


export interface CBSocketMessageSendResponseFunction<ResponseMessageType = any> extends CBSocketMessageSendResponseFunctionBase<ResponseMessageType> {
    respondingToMainResponse: boolean;
    
    excludeMessageFromAutomaticConnectionEvents: () => void;
    
    setResponseValidityDuration(duration: number);
    
    useStoredResponseWithErrorResponse();
    
    sendErrorResponse(message?: any, completion?: CBSocketMessageCompletionFunction);
    
    sendIntermediateResponse(updateMessage: any, completion?: CBSocketMessageCompletionFunction);
    
    // This tells the client to use the stored response if responseHash matches and also enables storing of responses in the client in the first place
    // Returns true if the hash matched
    confirmStoredResponseHash(responseHash: string, completion?: CBSocketMessageCompletionFunction): boolean;
    
}



// Socket handshake messages
export interface CBSocketHandshakeInitMessage {
    
    accessToken?: string;
    userID: CBReferenceID;
    
    loginKey?: string;
    inquiryAccessKey?: string;
    
    instanceIdentifier: string;
    
}


export interface CBSocketHandshakeResponseMessage {
    
    accepted: boolean;
    
    userProfile?: CBUserProfile;
    
}





export type TypeWithoutKey<Type, Key> = Pick<Type, Exclude<keyof Type, Key>>;

export type TypeWithoutID<Type> = TypeWithoutKey<Type, "_id">;

export type Diff<T extends keyof any, U extends keyof any> =
    ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];

export type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U;

export type RecursivePartial<T> = {
    [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
        T[P] extends object ? RecursivePartial<T[P]> :
            T[P];
};






