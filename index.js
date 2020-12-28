/**
 * @api {post} /api/register Sign Up(If Socical login or Social register always call this api)
 * @apiGroup User
 * @apiParam {String} name Name(required)
 * @apiParam {String} email Email(If is social 0 email is required)
 * @apiParam {String} role Role(required, 1=admin,2=restaurent owner, 3=driver, 4= user, 5= manager)
 * @apiParam {String} phone Phone Number(If is social 0 phone is required)
 * @apiParam {String} isSocial Social or not(required, 1 For Social AND 0 For Not Social)
 * @apiParam {String} isEmailVerified Email verified or not(required, 1 For Verified AND 0 For Not Verified)
 * @apiParam {String} isPhoneVerified Phone verified or not(required, 1 For Verified AND 0 For Not Verified)
 * @apiParam {String} deviceToken Device Token(required)
 * @apiParam {String} deviceType Device Type(required, 1=android,2=IOS)
 * @apiParam {String} isActive User Status(required, 0=Inactive, 1=Active, 2=Pending)
 * @apiParam {String} languageCode Language Code(required, en=English, ar=Arabic)
 * @apiParam {String} password Password(required, If is social 0 password is required)
 * @apiParam {String} socialType Social Type(If is social 1 socialType is required)
 * @apiParam {String} socialId Social Id(If is social 1 socialId is required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'User Registered Succeessfully'}
 * @apiSuccess {Object} result User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "User Registered Succeessfully",
 *    "result": {
 *        "id": "18",
 *        "name": "dalvadi sandip",
 *        "email": "dalvadisandip123@gmail.com",
 *        "role": "2",
 *        "phone": "78742900666",
 *        "profilePic": "http://foodzela.thinkandsolutions.com/public/default_images/default_user.jpg",
 *        "isSocial": "0",
 *        "socialType": "",
 *        "socialId": "",
 *        "isEmailVerified": "1",
 *        "isPhoneVerified": "1",
 *        "deviceToken": "fOUgZJJgRSu5MM8tfZ4YlD:APA91bHsI8ogTMpf_1lcAjXVInyTzZsaqKb5I-t5ZELe3VWM9RfxrBpiCi-cDEeVdooBbl8P0-qF94DHCpfcUgSj4ldQ10UzJ1OhvNlfkiEjrwKZn0dbVVF1pNQaFowG9dtThBWjKDYV",
 *        "deviceType": "1",
 *        "loginToken": "8m1OV98vZ4YXrgEHBMz5",
 *        "instagram": "",
 *        "snap": "",
 *        "languageCode": "en",
 *        "address": "dhanala",
 *        "latitude": "12.333",
 *        "longitude": "34.32211",
 *        "is_document_verified": 0
 *    }
 *}
 * @apiErrorExample {json} Perameter required error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "success" : 0, 
 *       "message" : "All Fields Are Required"
 *	  }
 * @apiErrorExample {json} Email already registered error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "success" : 0, 
 *       "message" : "This Email Already Exists"
 *	  }
 * @apiErrorExample {json} Email or phone already registered error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "success" : 0, 
 *       "message" : "This Email or phone Email Already Exists"
 *	  }
 */

/**
 * @api {post} /api/login Login
 * @apiGroup User
 * @apiParam {String} isSocial Is Social(required,0=Not Social, 1=Social)
 * @apiParam {String} email Email(required, Phone or Email both in one required)
 * @apiParam {String} phone Phone(required, Phone or Email both in one required)
 * @apiParam {String} deviceType Device Type(required, 1=android,2=IOS)
 * @apiParam {String} deviceToken Device Token(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Login Successfully'}
 * @apiSuccess {Object} result User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Login Successfully",
 *    "result": {
 *        "id": "18",
 *        "name": "dalvadi sandip",
 *        "email": "dalvadisandip123@gmail.com",
 *        "role": "2",
 *        "phone": "78742900666",
 *        "profilePic": "http://foodzela.thinkandsolutions.com/public/default_images/default_user.jpg",
 *        "isSocial": "0",
 *        "socialType": "",
 *        "socialId": "",
 *        "isEmailVerified": 1,
 *        "isPhoneVerified": 1,
 *        "deviceToken": "sdfdfhiuhdf",
 *        "deviceType": "1",
 *        "loginToken": "XJRpPEn4O8NYAG1sfK9v",
 *        "instagram": "",
 *        "snap": "",
 *        "languageCode": "en",
 *        "address": "dhanala",
 *        "latitude": "12.333",
 *        "longitude": "34.32211",
 *        "is_document_verified": 0
 *    }
 *}
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 * @apiErrorExample {json} Password Missing
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Password Required."
 *	  }
 * @apiErrorExample {json} Invalid credential
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Invalid email or phone or password."
 *	  }
 * @apiErrorExample {json} Inactive User
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "User is blocked."
 *	  }
 * @apiErrorExample {json} Deleted User
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "User is deleted."
 *	  }
 * @apiErrorExample {json} Pending User. 
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "User request is pending"
 *	  }
 */


/**
 * @api {post} /api/forgotPassword Forgot Password
 * @apiGroup User
 * @apiParam {String} email email(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Password Reset Link Sent To E-mail Successfully.'}
 * @apiSuccess {Object} result Message object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *    {
 *		"success": 1,
 *		"message": "Password Reset Link Sent To E-mail Successfully."
 *    }
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 * @apiErrorExample {json} Email Not registered
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Email not registered with the system."
 *	  }
 */

/**
 * @api {post} /api/editProfile Edit Profile
 * @apiGroup User
 * @apiParam {String} json_content.loginToken Login Token(required)
 * @apiParam {String} json_content.id User Id(required)
 * @apiParam {String} json_content.name Name(required)
 * @apiParam {String} json_content.email Email(required)
 * @apiParam {String} json_content.phone Phone(required)
 * @apiParam {String} json_content.address Address
 * @apiParam {String} json_content.latitude Latitude
 * @apiParam {String} json_content.longitude Longitude
 * @apiParam {String} json_content.password Password
 * @apiParam {File} profilePic Profile Image
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Profile Updated Succeessfully,'}
 * @apiSuccess {Object} result User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Profile Updated Succeessfully",
 *    "result": {
 *        "id": "5",
 *        "name": "Sandy",
 *        "email": "sandip@gmail.com",
 *        "role": "2",
 *        "phone": "123456788",
 *        "profilePic": "http://foodzela.thinkandsolutions.com/public/profile_pic/1608829166.1607234811.logo.png",
 *        "isSocial": "0",
 *        "socialType": "",
 *        "socialId": "",
 *        "isEmailVerified": "0",
 *        "isPhoneVerified": "0",
 *        "deviceToken": "sdfdfhiuhdf",
 *        "deviceType": 1,
 *        "loginToken": "2XyE9fjhBOlb0ksFo3an",
 *        "instagram": "",
 *        "snap": "",
 *        "languageCode": "en",
 *        "address": "ahmedabad",
 *        "latitude": "43.33222",
 *        "longitude": "123.3444",
 *        "is_document_verified": 0
 *    }
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "status": 0,
 *     "error": "Unauthorized access"
 * }
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 * @apiErrorExample {json} Email already registered
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "This Email Already Exists."
 *	  }
 */


/**
 * @api {post} /api/changePassword Change Password
 * @apiGroup User
 * @apiParam {String} id User Id(required)
 * @apiParam {String} oldPassword Old Password(required)
 * @apiParam {String} newPassword New Password(required)
 * @apiParam {String} loginToken Login Token(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Password Updated Successfully,'}
 * @apiSuccess {Object} result object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *    {
 *		"success": 1,
 *		"message": "Password Updated Successfully."
 *    }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "status": 0,
 *     "error": "Unauthorized access"
 * }
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 * @apiErrorExample {json} Password Update
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Password Not Update."
 *	  }
 * @apiErrorExample {json} Old Password is wrong
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Old Password is wrong."
 *	  }
 */

/**
 * @api {post} /api/getProfileDetails Get ProfileDetails
 * @apiGroup User
 * @apiParam {String} id User Id(required)
 * @apiParam {String} loginToken Login Token(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Profile Detail get Succeessfully'}
 * @apiSuccess {Object} result  User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Profile Detail get Succeessfully",
 *    "result": {
 *        "id": "5",
 *        "name": "Sandy",
 *        "email": "sandip@gmail.com",
 *        "role": "2",
 *        "phone": "123456788",
 *        "profilePic": "http://foodzela.thinkandsolutions.com/public/profile_pic/1608829166.1607234811.logo.png",
 *        "isSocial": "0",
 *        "socialType": "",
 *        "socialId": "",
 *        "isEmailVerified": "0",
 *        "isPhoneVerified": "0",
 *        "deviceToken": "sdfdfhiuhdf",
 *        "deviceType": 1,
 *        "loginToken": "2XyE9fjhBOlb0ksFo3an",
 *        "instagram": "",
 *        "snap": "",
 *        "languageCode": "en",
 *        "address": "ahmedabad",
 *        "latitude": "43.33222",
 *        "longitude": "123.3444",
 *        "is_document_verified": 0
 *    }
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "status": 0,
 *     "error": "Unauthorized access"
 * }
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 * @apiErrorExample {json} User exists!
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "User Does not exists!"
 *	  }
 */

/**
 * @api {post} /api/phoneResetPassword Phone to Reset Password
 * @apiGroup User
 * @apiParam {String} phone Phone Number(required)
 * @apiParam {String} password Password(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Password updated Succeessfully'}
 * @apiSuccess {Object} result  User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Password updated Succeessfully",
 *    "result": {
 *        "id": "3",
 *        "name": "sandip",
 *        "email": "dalvadisandip12@gmail.com",
 *        "role": "2",
 *        "phone": "123456",
 *        "profilePic": "http://foodzela.thinkandsolutions.com/public/default_images/default_user.jpg",
 *        "isSocial": "0",
 *        "socialType": "",
 *        "socialId": "",
 *        "isEmailVerified": "0",
 *        "isPhoneVerified": "0",
 *        "deviceToken": "acddvc",
 *        "deviceType": 1,
 *        "loginToken": "4Uv7Hc3lKMCF1s9qAez2",
 *        "instagram": "",
 *        "snap": "",
 *        "languageCode": "en",
 *        "address": "",
 *        "latitude": "",
 *        "longitude": "",
 *        "is_document_verified": 1,
 *        "liceneseDelivery": "http://foodzela.thinkandsolutions.com/public/liceneseDelivery/1608745836.1607234811.logo.png",
 *        "certificationShop": "http://foodzela.thinkandsolutions.com/public/certificationShop/1608745836.1602658218915.JPEG",
 *        "idProof": null
 *    }
 *}
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 * @apiErrorExample {json} Phone number not register
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Phone number not registered"
 *	  }
 */


/**
 * @api {post} /api/categoriesList Category List
 * @apiGroup Category
 * @apiParam {String} startLimit Start Limit
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Category list loaded successfully.'}
 * @apiSuccess {Integer} totalCount  Total count of active Category 
 * @apiSuccess {Array} result  Category array object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *  "success": 1,
 *  "message": "Category list loaded successfully.",
 *  "totalCount": 1,
 *  "result": [
 *      {
 *          "id": 2,
 *          "name_en": "Fast Foods",
 *          "name_ar": "وجبات سريعة",
 *          "image": "http://foodzela.thinkandsolutions.com/public/categories/1608185347.depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg"
 *      }
 *  ]
 * }
 * @apiErrorExample {json} Category not found
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Category not found."
 *	  }
 */

/**
 * @api {post} /api/addRestaurent Add Restaurent
 * @apiGroup Restaurent
 * @apiParam {File} ownerLogo Owner Logo
 * @apiParam {String} json_content.userId Restaurent Owner Id(required)
 * @apiParam {String} json_content.name Restaurent Name(required)
 * @apiParam {String} json_content.description Login Token(required)
 * @apiParam {String} json_content.loginToken Login Token(required)
 * @apiParam {String} json_content.address Address(required)
 * @apiParam {String} json_content.latitude Latitude(required)
 * @apiParam {String} json_content.longitude Longitude(required)
 * @apiParam {String} json_content.phone Phone(required)
 * @apiParam {String} json_content.mobile Mobile(required)
 * @apiParam {String} json_content.information Information(required)
 * @apiParam {String} json_content.deliveryFee Delivery Fee(required)
 * @apiParam {String} json_content.adminCommission Admin Commission(required)
 * @apiParam {String} json_content.openTime Restaurent open time(required)
 * @apiParam {String} json_content.closeTime Restaurent close time(required)
 * @apiParam {String} json_content.isOpen Restaurent is open(required, 0=not open, 1= open)
 * @apiParam {Array} json_content."categories" Category Id Array(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Restaurent Added Succeessfully'}
 * @apiSuccess {Object} result  Restaurent object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Restaurent Added Succeessfully",
 *    "result": {
 *        "id": 6,
 *        "name": "Ganesh restaurent",
 *        "description": "New Description",
 *        "address": "New Address",
 *        "latitude": "12.111",
 *        "longitude": "22.333",
 *        "phone": "123455668",
 *        "mobile": "12443646",
 *        "information": "New Information",
 *        "deliveryFee": "11",
 *        "adminCommission": "30",
 *        "ownerLogo": "http://foodzela.thinkandsolutions.com/public/default_images/blank_image.jpeg"
 *    }
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "status": 0,
 *     "error": "Unauthorized access"
 * }
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 */

/**
 * @api {post} /api/restaurentOwnerDocVerified Restaurent Owner Document Verified
 * @apiGroup Restaurent
 * @apiParam {File} liceneseDelivery Licenese Delivery(required)
 * @apiParam {File} certificationShop Certification Shop(required)
 * @apiParam {File} idProof ID Proof(required)
 * @apiParam {String} json_content.loginToken Login Token(required)
 * @apiParam {String} json_content.restaurentOwnerId Restaurent Owner Id(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Document verified Succeessfully'}
 * @apiSuccess {Object} result  User object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Document verified Succeessfully",
 *    "result": {
 *        "id": "5",
 *        "name": "Sandy",
 *        "email": "sandip@gmail.com",
 *        "role": "2",
 *        "phone": "123456788",
 *        "profilePic": "http://foodzela.thinkandsolutions.com/public/profile_pic/1608829166.1607234811.logo.png",
 *        "isSocial": "0",
 *        "socialType": "",
 *        "socialId": "",
 *        "isEmailVerified": "0",
 *        "isPhoneVerified": "0",
 *        "deviceToken": "sdfdfhiuhdf",
 *        "deviceType": 1,
 *        "loginToken": "2XyE9fjhBOlb0ksFo3an",
 *        "instagram": "",
 *        "snap": "",
 *        "languageCode": "en",
 *        "address": "ahmedabad",
 *        "latitude": "43.33222",
 *        "longitude": "123.3444",
 *        "is_document_verified": 1,
 *        "liceneseDelivery": "http://foodzela.thinkandsolutions.com/public/liceneseDelivery/1608829940.image-logo.png",
 *        "certificationShop": "http://foodzela.thinkandsolutions.com/public/certificationShop/1608829940.1602658218915.JPEG",
 *        "idProof": "http://foodzela.thinkandsolutions.com/public/idProof/1608829940.1607234811.logo.png"
 *    }
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "status": 0,
 *     "error": "Unauthorized access"
 * }
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 * @apiErrorExample {json} Licence
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Licence is Required."
 *	  }
 * @apiErrorExample {json} Shop certificate
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Shop certificate Required."
 *	  }
 * @apiErrorExample {json} Id Proof
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "Id Proof Required."
 *	  }
 */

/**
 * @api {get} /termsCondition/{lang} Terms & Condition View
 * @apiGroup Terms Condition
 * @apiParam {String} lang Language Code(en or ar)
 * @apiSuccess {Load_view} Load_view Terms & condition view load successfully
 * @apiSuccessExample {json} Success
 * Terms and condition view load successfully
 */

/**
 * @api {get} /aboutUs/{lang} About Us View
 * @apiGroup About Us
 * @apiParam {String} lang Language Code(en or ar)
 * @apiSuccess {Load_view} Load_view About Us view load successfully
 * @apiSuccessExample {json} Success
 * About Us view load successfully
 */

/**
 * @api {post} /api/addBankAccount Add Bank Account
 * @apiGroup Bank
 * @apiParam {String} loginToken Login Token(required)
 * @apiParam {String} userId User Id(required)
 * @apiParam {String} name Name(required)
 * @apiParam {String} bankId Bank Id(required)
 * @apiParam {String} accountNumber Account Number(required)
 * @apiParam {String} city City(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Bank account saved successfully'}
 * @apiSuccess {Object} result  Bank Account object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *{
 *    "success": 1,
 *    "message": "Bank account saved successfully.",
 *    "result": {
 *        "id": 5,
 *        "name": "Sandip",
 *        "bankName": "State bank of india",
 *        "bankId": 1,
 *        "accountNumber": "123456789",
 *        "city": "Dhanala"
 *    }
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "status": 0,
 *     "error": "Unauthorized access"
 * }
 * @apiErrorExample {json} Missing perameter error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": 0,
 *		 "error": "All Fields Are Required."
 *	  }
 */

/**
 * @api {post} /api/bankList Bank List
 * @apiGroup Bank
 * @apiParam {String} loginToken Login Token(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Bank list loaded successfully'}
 * @apiSuccess {Array} result  Bank List array object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *    {
 *        "success": 1,
 *        "message": "Bank list loaded successfully.",
 *        "result": [
 *            {
 *                "id": 1,
 *                "name": "State bank of india"
 *            },
 *            {
 *                "id": 2,
 *                "name": "Saurashtra gramin bank"
 *            },
 *            {
 *                "id": 3,
 *                "name": "Central bank of india"
 *            }
 *        ]
 *    }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "status": 0,
 *     "error": "Unauthorized access"
 * }
 */