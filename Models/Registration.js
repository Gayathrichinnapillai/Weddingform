const db=require('../dbconnection');  
    const Regschema=db.Schema({  
        Dateofmarriage:{type:Date},
        Name:{type:String},  
        Nationality:{type:String},
        ResidentialStatus:{type:Number},
        Religion:{type:Number},
        Caste:{type:String},
        Dateofbirth:{type:Date},
        Employername:{type:String},
        Designation:{type:String},
        MaritalStatusBeforeMarriage:{type:Number},
        Mobileno:{type:Number},
        whatsappnumber:{type:Number},
        Email:{type:String},
        ResiAddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        Passportno:{type:String},
        Fathername:{type:String},
        Fatherreligion:{type:String},
        FLivingStatus:{type:Number},
        FatherAge:{type:Number},
        FatherOccupation:{type:String},
        Fatheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        MotherName:{type:String},
        Motherreligion:{type:String},
        MLivingStatus:{type:Number},
        MotherAge:{type:Number},
        MotherOccupation:{type:String},
        Motheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        BrideName:{type:String},  
        BrideNationality:{type:String},
        BrideResidentialStatus:{type:Number},
        BrideReligion:{type:Number},
        BrideCaste:{type:String},
        BrideDateofbirth:{type:Date},
        BrideEmployername:{type:String},
        BrideDesignation:{type:String},
        BrideMaritalStatusBeforeMarriage:{type:Number},
        BrideMobileno:{type:Number},
        Bridewhatsappnumber:{type:Number},
        BrideEmail:{type:String},
        BrideResiAddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        BridePassportno:{type:String},
        BrideFathername:{type:String},
        BrideFatherreligion:{type:String},
        BrideFLivingStatus:{type:Number},
        BrideFatherAge:{type:Number},
        BrideFatherOccupation:{type:String},
        BrideFatheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
        BrideMotherName:{type:String},
        BrideMotherreligion:{type:String},
        BrideMLivingStatus:{type:Number},
        BrideMotherAge:{type:Number},
        BrideMotherOccupation:{type:String},
        BrideMotheraddress:{
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },

        placeofmarriage:
        {   
            Name:{type:String},
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },  
        MarriageDate:{type:Date},
       // MarriageNotes:{type:String},
        whosolemnizedmarriage:{type:Number},
        Addressofsolemnized:
        {
            Street:{type:String},
            village:{type:String},
            Taluk:{type:String},
            District:{type:String},
            State:{type:String},
            Country:{type:String},
            Pincode:{type:String},
        },
       Bridemother:{type:Number},
       BrideFather:{type:Number}, 
       BrideFatherGroom:{type:Number},
       BridemotherGroom:{type:Number},
      

    //   Witness:{type:Number},
      Witnessname:{type:String},
      Witnessrelation:{type:Number},
      Witnessaddress:{
      Street:{type:String},
      village:{type:String},
      Taluk:{type:String},
      District:{type:String},
      State:{type:String},
      Country:{type:String},
      Pincode:{type:String},
    },
    Identitynumber:{type:String},

       Passport:{type:String},  
       Marksheet:{type:String},
       RationCard:{type:String},
       Aadharcard:{type:String},
      Voterid:{type:String},
      DrivingLicence:{type:String},
      PassportSizePhotograph:{type:String},
      DivorceCopy:{type:String},
      FirstMarriageCertificate:{type:String},
      SpouseDeathCertificate:{type:String},
      SingleStatusCertificate:{type:String},

      BridePassport:{type:String},  
      BrideMarksheet:{type:String},
      BrideRationCard:{type:String},
      BrideAadharcard:{type:String},
      BrideVoterid:{type:String},
      BrideDrivingLicence:{type:String},
      BridePassportSizePhotograph:{type:String},
      BrideDivorceCopy:{type:String},
      BrideFirstMarriageCertificate:{type:String},
      BrideSpouseDeathCertificate:{type:String},
      BrideSingleStatusCertificate:{type:String},

      Invitation:{type:String},  
      MarriageReceipt:{type:String},
      Moreattach:{type:String},
      Declaration:{type:Number},
      Otherservices:{type:Number},
      Subservices:{type:Number}    
});  
  
module.exports=db.model('Weddingform',Regschema);