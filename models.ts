/// <reference path="webclient/scripts/CBCore/CBDataInterfaces.ts" />

import * as mongoose from "mongoose"
import * as mongooseAutopopulate from "mongoose-autopopulate"
import { UserController } from "./controllers/UserController"
import { CBDocument } from "./TypeUtil"
import { ENV_PREFIX } from "./config"
import {
    CBAdministratorRightsDescriptor,
    CBDropdownData,
    CBDropdownDataItem,
    CBFileAccessor, CBFileData,
    CBLanguageItem, CBLoginKey, CBUserPassword, CBUserProfile, CBUserProfilePublic
} from "./webclient/scripts/CBCore/CBDataInterfaces"


const Schema = mongoose.Schema





const LocalizedTextModelObject = {
    et: String,
    en: String
}


const DropdownDataItemSchema = new Schema({
    
    title: {
        type: LocalizedTextModelObject,
        required: true
    },
    attachedObject: Schema.Types.Mixed,
    isADropdownDataSection: Boolean,
    isADropdownDataRow: Boolean,
    itemCode: String,
    dropdownCode: String,
    rowsData: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DropdownDataItem",
            autopopulate: true
            // validate: {
            //     isAsync: true,
            //     validator: validateSubjectExists
            // }
        }
    ]
    
}, { collection: ENV_PREFIX + "dropdown_data_item", timestamps: true })
DropdownDataItemSchema.plugin(mongooseAutopopulate)
export const DropdownDataItemModel = mongoose.model<CBDocument<CBDropdownDataItem<any>>>(
    "DropdownDataItem",
    DropdownDataItemSchema
)

const DropdownDataSchema = new Schema({
    
    name: LocalizedTextModelObject,
    dropdownCode: {
        type: String,
        required: true,
        index: true
    },
    data: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DropdownDataItem"
        }
    ]
    
}, { collection: ENV_PREFIX + "dropdown_data", timestamps: true })
export const DropdownDataModel = mongoose.model<CBDocument<CBDropdownData<any>>>("DropdownData", DropdownDataSchema)


const LanguageItemSchema = new Schema({
    
    value: String,
    languageKey: String,
    itemKey: String
    
}, { collection: ENV_PREFIX + "language_item" })

export const LanguageItemModel = mongoose.model<CBDocument<CBLanguageItem>>("LanguageItem", LanguageItemSchema)



// Asdasd

const LoginKeySchema = new Schema({
    
    key: String,
    accessToken: String,
    storeAccessTokenInClient: Boolean,
    authenticationSource: Number,
    userID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    isValid: Boolean,
    
    loginDate: Date,
    logoutDate: Date
    
}, { collection: ENV_PREFIX + "login_key", timestamps: true })
export const LoginKeyModel = mongoose.model<CBDocument<CBLoginKey>>("LoginKey", LoginKeySchema)






const UserPasswordSchema = new Schema({
    
    passwordHash: String,
    
    userID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    isValid: Boolean
    
}, { collection: ENV_PREFIX + "user_password", timestamps: true })
export const UserPasswordModel = mongoose.model<CBDocument<CBUserPassword>>("UserPassword", UserPasswordSchema)


const validateUserExists = (userId, respond) => {
    UserModel.find({ _id: userId }, (err, doc) => {
        if (err || !doc || !doc.length) {
            respond(false, "No such user.")
        }
        else {
            respond(true)
        }
    })
}

const validateSubscriptionExists = (subscriptionId, respond) => {
    SubscriptionModel.find({ _id: subscriptionId }, (err, doc) => {
        if (err || !doc || !doc.length) {
            respond(false, "Sellise ID-ga subscriptionit pole.")
        }
        else {
            respond(true)
        }
    })
}


const UserSchema = new Schema({
    
    accessToken: { type: String, select: false },
    authProviderId: {
        google: { type: String, select: false }
    },
    contactInformation: {
        name: String,
        email: String,
        phoneNumber: String,
        address: String,
        postalCode: String,
        additionalInformation: String
    },
    profileImageUrl: String,
    refreshToken: { type: String, select: false },
    onlineDate: Date
    
}, {
    collection: ENV_PREFIX + "user",
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
    
})
UserSchema.methods.toJSON = function (this: CBDocument<CBUserProfile>) {
    
    const result = this.toObject()
    
    delete result.accessToken
    delete result.authProviderId
    delete result.refreshToken
    delete result.createdAt
    
    return result
    
}

export const UserModel = mongoose.model<CBDocument<CBUserProfile>>("User", UserSchema)


const UserPublicSchema = UserSchema.clone()
UserPublicSchema.methods.toJSON = function (this: CBDocument<CBUserProfile>) {
    
    const privateObject: CBUserProfile = this.toObject()
    
    let displayName = (privateObject.contactInformation || { name: "" }).name
    
    if (privateObject.merchantProfile && privateObject.merchantProfile.name) {
        
        displayName = privateObject.merchantProfile.name
        
    }
    
    const result: CBUserProfilePublic = {
        _id: privateObject._id,
        displayName: displayName,
        profileImageUrl: privateObject.profileImageUrl
    }
    
    return result
    
}
export const UserPublicModel = mongoose.model<CBDocument<CBUserProfilePublic>>("UserPublic", UserPublicSchema)


const AdministratorRightsSchema = new Schema({
    
    userProfile: {
        type: Schema.Types.ObjectId,
        ref: "User",
        validate: {
            isAsync: true,
            validator: validateUserExists
        },
        required: true
    }
    
}, { collection: ENV_PREFIX + "administrator_rights", timestamps: true })
export const AdministratorRightsModel = mongoose.model<CBDocument<CBAdministratorRightsDescriptor>>(
    "AdministratorRights",
    AdministratorRightsSchema
)

const SubscriptionSchema = new Schema({
    
    isIndefinite: Boolean,
    subscriptionKind: Number,
    startDate: Date,
    endDate: Date
    
}, { collection: ENV_PREFIX + "subscription", timestamps: true })
export const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema)

// Asdasd



/***********
 * Inquiry *
 ***********/

const FileDataSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    dataURL: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    isLimitedAccess: Boolean,
    accessibleToUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserPublic"
        }
    ]
    
}, { collection: ENV_PREFIX + "file_data", timestamps: true })
export const FileDataModel = mongoose.model<CBDocument<CBFileData>>("FileData", FileDataSchema)

const FileAccessorSchema = new Schema({
    
    fileData: {
        type: Schema.Types.ObjectId,
        ref: "FileData"
    }
    
}, { collection: ENV_PREFIX + "file_accessor", timestamps: true })
export const FileAccessorModel = mongoose.model<CBDocument<CBFileAccessor>>("FileAccessor", FileAccessorSchema)











