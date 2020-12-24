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
 *    {
 *		"status": true,
 *		"error": "",
 *		"access_token": "$2y$10$GCTdtvyphepag1RdAZz8XeZd2ZDKC7./nVvEfLTFYCtDotbcq1JQ.",
 *		"user": {
 *			"id": 1,
 *			"email": "engr.numaan@yahoo.com",
 *			"agreed": "1",
 *			"email_verified_at": "2020-09-08 17:01:53",
 *			"created_at": "2020-09-08 17:01:53",
 *			"updated_at": "2020-09-08 17:01:53",
 *			"verify_code": null,
 *			"ring_wallet_address": null,
 *			"ethereum_wallet_address": null,
 *			"KYC_result": "N",
 *			"description": null,
 *			"inactive": 0,
 *			"user_grade_id": null,
 *          "original_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *          "stored_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *          "image":"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *          "kong": 20,
 *          "bonus_kong": 0,
 *          "total": 20
 *		}
 *	  }
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
 *    {
 *		"status": false,
 *		"message": "Email does not exist."
 *    }
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
 *    {
 *		"success": 1,
 *		"message": "Password Reset Link Sent To E-mail Successfully."
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
 *    {
 *		"success": 1,
 *		"message": "Password Updated Successfully."
 *    }
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
 *    {
 *		"success": 1,
 *		"message": "Password Updated Successfully."
 *    }
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
 * @apiParam {String} json_content.loginToken Login Token(required)
 * @apiSuccess {Boolean} success {1:success, 0:fail}
 * @apiSuccess {String} message {message:'Restaurent Added Succeessfully'}
 * @apiSuccess {Object} result  Restaurent object
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