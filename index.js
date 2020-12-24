/**
 * @api {post} /api/login/v1 Sign In
 * @apiGroup User
 * @apiParam {String} email Email address(required)
 * @apiParam {String} password Password(required)
 * @apiParam {String} device_id Device Id(required)
 * @apiParam {String} device_token Device Token(required)
 * @apiParam {String} device_type Device Type(required, 1 For Android AND 2 For IOS)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null:'', error:'Error message'}
 * @apiSuccess {String} response.access_token Access Token
 * @apiSuccess {Object} response.user User object
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
 * @apiErrorExample {json} Invalid request error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": false,
 *		 "error": "Invalid request."
 *	  }
 * @apiErrorExample {json} Invalid credentials error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": false,
 *		 "error": "Invalid credentials."
 *	  }
 * @apiErrorExample {json} Unverified email error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": false,
 *		 "error": "Unverified"
 *	  }
 */

/**
 * @api {post} /api/register/check/v1 Check Email
 * @apiGroup User
 * @apiParam {String} email Email address(required)
 * @apiSuccess {Boolean} response.status {false:success, true:fail}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *    {
 *		"status": false,
 *		"message": "Email does not exist."
 *    }
 * @apiErrorExample {json} Invalid request error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": true,
 *		 "error": "Invalid request."
 *	  }
 * @apiErrorExample {json} Email registered error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": true,
 *		 "message": "Email is already registered."
 *	  }
 */

/**
 * @api {post} /api/register/v1 Sign Up
 * @apiGroup User
 * @apiParam {String} email Email address(required)
 * @apiParam {String} password Password(required)
 * @apiParam {String} nick_name Nick Name(required)
 * @apiParam {String} agreed {1:Agreed}(required)
 * @apiParam {String} referee Referee Email Address
 * @apiSuccess {Boolean} status {true:success, false:fail}
 * @apiSuccess {String} error Null or error message
 * @apiSuccess {Object} response.user User object
 * @apiSuccessExample {json} Success
 *   HTTP/1.1 200 OK
 *   {
 *   "status": true,
 *   "error": "",
 *   "user": {
 *       "nick_name": "Ahmed",
 *       "email": "se.numaan@yahoo.com",
 *       "agreed": "1",
 *       "created_at": "2020-09-08 19:09:20",
 *       "updated_at": "2020-09-08 19:09:20",
 *       "id": 2,
 *       "verify_code": "0aaa8ccf2a32b30a1db5c8e08fd29bc4"
 *   }
 * }
 * @apiErrorExample {json} Invalid request error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": true,
 *		 "error": "Invalid request."
 *	  }
 * @apiErrorExample {json} Email registered error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": true,
 *		 "error": "Email already registered."
 *	  }
 */

/**
 * @api {post} /api/password/reset/v1 Password Reset
 * @apiGroup User Password
 * @apiParam {String} email Email address(required)
 * @apiParam {String} lang {ko:Korean, en:English}(required)
 * @apiSuccessExample {json} Success
 *   HTTP/1.1 200 OK
 *   {
 *   "status": true,
 *   "error": "",
 *   "message": "Reset password email was sent successfully."
 *   }
 * @apiErrorExample {json} Invalid request error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "error": "Validation failed",
 *		 "description":["The email field is required."]
 *	  }
 * @apiErrorExample {json} Email not registered error
 * HTTP/1.1 422 Unprocessable Entity
 *	  {
 *       "status": false,
 *		 "error":"Email is not registered"
 *	  }
 * @apiErrorExample {json} Invalid Language
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "status": false,
 *     "error": "Invalid language."
 * }
 */

/**
 * @api {get} /api/my_page/v1 Get Details
 * @apiGroup User
 * @apiParam {String} access_token Access Token(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error Response error(if any)
 * @apiSuccess {Object} response.user User object
 * @apiSuccess {Object} response.user.user_grade User grade object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "user": {
 *         "profile_image": "",
 *         "user_grade": {
 *             "id": 1,
 *             "grade_kr": "그린",
 *             "grade_en": "Green",
 *             "description": null
 *         },
 *         "nick_name": "Ahmed",
 *         "email": "engr.numaan@yahoo.com",
 *         "phone_number": null,
 *         "phone_number_verified": false,
 *         "my_km": 0,
 *         "total_user_km": 0,
 *         "image" : "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "kong": 20,
 *         "bonus_kong": 0,
 *         "total": 20
 *     }
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/logout/v1 Sign out
 * @apiGroup User
 * @apiParam {String} access_token Access Token(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "User logged out successfully."
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/nickname/update/v1 Modify Nickname
 * @apiGroup User
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} nick_name Nickname(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "Nick name updated successfully."
 * }
 * @apiErrorExample {json} Missing Parameter
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The nick name field is required."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/sms_verification_code/send/v1 Send Phone Verify Code
 * @apiGroup Phone Verification
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} phone_number Phone Number(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "Verification code has been sent successfully."
 * }
 * @apiErrorExample {json} Missing Parameter
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The phone number field is required."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/phone/verify/v1 Verify Phone Number
 * @apiGroup Phone Verification
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} code Verification code(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "Phone number verified successfully."
 * }
 * @apiErrorExample {json} Missing Parameter
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The code field is required."
 *     ]
 * }
 * @apiErrorExample {json} Validation failed(1)
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "Verification code has 4 digits only."
 *     ]
 * }
 * @apiErrorExample {json} Validation failed(2)
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *    "error": "Validation failed",
 *     "description": [
 *         "The code must be a number."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/password/change/v1 Change Password
 * @apiGroup User Password
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} password Password(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "Password has been updated successfully."
 * }
 * @apiErrorExample {json} Missing Parameter
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The password field is required."
 *     ]
 * }
 * @apiErrorExample {json} Validation failed
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The password must be at least 8 characters.",
 *         "Password must have an English letter and a digit."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/ewallet_notification/change/v1 Toggle E-Wallet Notification
 * @apiGroup Notifications
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} ewallet_notification {0:disable, 1:enable} (required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "E-Wallet notification status saved successfully."
 * }
 * @apiErrorExample {json} Missing Parameter
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "ewallet notification field is required."
 *     ]
 * }
 * @apiErrorExample {json} Validation failed
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The selected ewallet notification is invalid."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/other_notification/change/v1 Toggle Other Notifications
 * @apiGroup Notifications
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} email_notification {0:disable, 1:enable} (required)
 * @apiParam {String} sms_notification {0:disable, 1:enable} (required)
 * @apiParam {String} app_push_notification {0:disable, 1:enable} (required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {String} response.message Response message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "Notification status saved successfully."
 * }
 * @apiErrorExample {json} Missing Parameter
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The email notification field is required.",
 *         "The sms notification field is required.",
 *         "The app push notification field is required."
 *     ]
 * }
 * @apiErrorExample {json} Validation failed
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The selected email notification is invalid.",
 *         "The selected sms notification is invalid.",
 *         "The selected app push notification is invalid."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {get} /api/user/notifications/status/v1 Get Notifications Status
 * @apiGroup Notifications
 * @apiParam {String} access_token Access Token(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.notitication Notification object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "notitication": {
 *         "setting_notification_ewallet": true,
 *         "setting_notification_email": false,
 *         "setting_notification_sms": false,
 *         "setting_notification_app_push": false,
 *         "setting_notification_last_update": "2020-09-23 15:23:34"
 *     }
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {get} /api/faq/{lang}/v1 Get FAQ List
 * @apiGroup FAQs
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} lang {ko:Korean, en:English}(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.faq FAQ Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "faq": [
 *         {
 *             "question": "테스트 제목",
 *             "answer": "텍스트는 테스트 목적으로 만 사용됩니다.",
 *             "order": 1,
 *             "created_at": "2020-09-23 13:05:13",
 *             "updated_at": "2020-09-23 13:05:13"
 *         }
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/faq/{lang}/search/v1 Search FAQ
 * @apiGroup FAQs
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} lang {ko:Korean, en:English}(required)
 * @apiParam {String} term Search term(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.faq FAQ Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "faq": [
 *         {
 *             "question": "테스트 제목",
 *             "answer": "텍스트는 테스트 목적으로 만 사용됩니다.",
 *             "order": 1,
 *             "created_at": "2020-09-23 13:05:13",
 *             "updated_at": "2020-09-23 13:05:13"
 *         }
 *     ]
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *  {
 *     "error": "Validation failed",
 *     "description": [
 *         "The term field is required."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {get} /api/terms/{lang}/v1 Terms
 * @apiGroup Terms
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} lang {ko:Korean, en:English}(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.terms Terms Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "terms": [
 *         {
 *             "name": "Terms and service",
 *             "content": "terms and service sample",
 *             "order": 1,
 *             "updated_at": ""
 *         },
 *         {
 *             "name": "Privacy policy",
 *             "content": "Privacy policy",
 *             "order": 2,
 *             "updated_at": ""
 *         },
 *         {
 *             "name": "E-wallet terms",
 *             "content": "E-wallet terms",
 *             "order": 3,
 *             "updated_at": ""
 *         }
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /user/photo/upload/v1 Upload Photo
 * @apiGroup User
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {File} photo {filetype: jpeg,png,bmp}(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {URL} response.profile_image_url URL of user profile photo
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *  {
 *     "status": true,
 *     "error": "",
 *     "profile_image_url": "http://g9soft.iptime.org:7016/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9VTGVCZlM0NGF1cThXZ0RKVU9uUWE4bHcwU3JYdGVEZXZXZEZLb040LnBuZ3xkb3dubG9hZCAoMSkucG5n"
 * }
 * @apiErrorExample {json} Parameter missing
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The photo field is required."
 *     ]
 * }
 * @apiErrorExample {json} Validation error
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The photo must be a file of type: jpeg, bmp, png."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/qa/submit/v1 Submit QA
 * @apiGroup QA
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} title Title(required)
 * @apiParam {String} question Question(required)
 * @apiParam {String} lang Language Code(Ex. en, ko)
 * @apiParam {File} attachment[] Attachment(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.message Message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "message": "QA submitted successfully."
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The title field is required.",
 *         "The question field is required."
 *     ]
 * }
 * @apiErrorExample {json} Maximum upload filesize
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The attachment.0 may not be greater than 20480 kilobytes."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */

/**
 * @api {post} /api/user/register/social/v1 Sign Up
 * @apiGroup Social Networks
 * @apiParam {String} email E-Mail address(required)
 * @apiParam {String} nick_name Nick name(required)
 * @apiParam {String} agreed {1:Agreed}(required)
 * @apiParam {String} type {google,naver,kakaotalk}(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.message Message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 *  {
 *     "status": true,
 *     "error": "",
 *     "user": {
 *         "created_at": "2020-10-02 14:24:26",
 *         "user_grade_id": 1,
 *         "nick_name": "Ahmed",
 *         "email": "test.2@gmail.com",
 *         "agreed": "1",
 *         "email_verified_at": "2020-10-02 14:24:26",
 *         "verify_code": null,
 *         "updated_at": "2020-10-02 14:24:26",
 *         "id": 6
 *     }
 * }
 * @apiErrorExample {json} Missing parameters
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "error": "Validation failed",
 *     "description": [
 *         "The email field is required.",
 *         "The nick name field is required.",
 *         "The agreed field is required."
 *     ]
 * }
 */

/**
 * @api {post} /api/user/login/google/v1 Sign-In with Google
 * @apiGroup Social Networks
 * @apiParam {String} access_token Access token obtained after sign-in with Google(required)
 * @apiParam {String} email E-Mail address(required)
 * @apiParam {String} nick_name Nick name(required)
 * @apiParam {String} device_id Device Id(required)
 * @apiParam {String} device_token Device Token(required)
 * @apiParam {String} device_type Device Type(required, 1 For Android AND 2 For IOS)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.message Message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "access_token": "e1762acfcc4685a4e5f2356b3aa88c7bf144fd7730a6fe6c6c5a049979cbbe61",
 *     "user": {
 *         "id": 5,
 *         "email": "test.1@gmail.com",
 *         "nick_name": "Ahmed",
 *         "agreed": "1",
 *         "email_verified_at": "2020-10-02 14:10:05",
 *         "created_at": "2020-10-02 13:49:34",
 *         "updated_at": "2020-10-02 14:10:05",
 *         "verify_code": null,
 *         "wallet_address": null,
 *         "KYC_result": "N",
 *         "description": null,
 *         "inactive": 0,
 *         "user_grade_id": 1,
 *         "score": null,
 *         "ip": null,
 *         "login_status": null,
 *         "original_file": null,
 *         "stored_file": null,
 *         "phone_number": null,
 *         "phone_number_verified": null,
 *         "signup_method_id": null,
 *         "setting_notification_email": null,
 *         "setting_notification_sms": null,
 *         "setting_notification_app_push": null,
 *         "setting_notification_last_update": null,
 *         "setting_notification_ewallet": null,
 *         "sms_verification_code": null,
 *         "original_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "stored_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "image":"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "kong": 20,
 *         "bonus_kong": 0,
 *         "total": 20
 *     }
 * }
 * @apiErrorExample {json} Missing parameters
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "status": false,
 *     "error": "Invalid request."
 * }
 * @apiErrorExample {json} Invalid access token
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "status": false,
 *     "error": "Invalid access token."
 * }
 */

/**
 * @api {post} /api/user/login/naver/v1 Sign-In with Naver
 * @apiGroup Social Networks
 * @apiParam {String} access_token Access token obtained after sign-in with Naver(required)
 * @apiParam {String} email E-Mail address(required)
 * @apiParam {String} nick_name Nick name(required)
 * @apiParam {String} device_id Device Id(required)
 * @apiParam {String} device_token Device Token(required)
 * @apiParam {String} device_type Device Type(required, 1 For Android AND 2 For IOS)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.message Message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "access_token": "e1762acfcc4685a4e5f2356b3aa88c7bf144fd7730a6fe6c6c5a049979cbbe61",
 *     "user": {
 *         "id": 5,
 *         "email": "test.1@gmail.com",
 *         "nick_name": "Ahmed",
 *         "agreed": "1",
 *         "email_verified_at": "2020-10-02 14:10:05",
 *         "created_at": "2020-10-02 13:49:34",
 *         "updated_at": "2020-10-02 14:10:05",
 *         "verify_code": null,
 *         "wallet_address": null,
 *         "KYC_result": "N",
 *         "description": null,
 *         "inactive": 0,
 *         "user_grade_id": 1,
 *         "score": null,
 *         "ip": null,
 *         "login_status": null,
 *         "phone_number": null,
 *         "phone_number_verified": null,
 *         "signup_method_id": null,
 *         "setting_notification_email": null,
 *         "setting_notification_sms": null,
 *         "setting_notification_app_push": null,
 *         "setting_notification_last_update": null,
 *         "setting_notification_ewallet": null,
 *         "sms_verification_code": null,
 *         "original_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "stored_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "image":"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "kong": 20,
 *         "bonus_kong": 0,
 *         "total": 20
 *     }
 * }
 * @apiErrorExample {json} Missing parameters
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "status": false,
 *     "error": "Invalid request."
 * }
 * @apiErrorExample {json} Invalid access token
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "status": false,
 *     "error": "Authentication failed (인증 실패하였습니다.)"
 * }
 */

/**
 * @api {post} /api/user/login/kakaotalk/v1 Sign-In with Kakaotalk
 * @apiGroup Social Networks
 * @apiParam {String} access_token Access token obtained after sign-in with Kakaotalk(required)
 * @apiParam {String} email E-Mail address(required)
 * @apiParam {String} nick_name Nick name(required)
 * @apiParam {String} device_id Device Id(required)
 * @apiParam {String} device_token Device Token(required)
 * @apiParam {String} device_type Device Type(required, 1 For Android AND 2 For IOS)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.message Message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "access_token": "e1762acfcc4685a4e5f2356b3aa88c7bf144fd7730a6fe6c6c5a049979cbbe61",
 *     "user": {
 *         "id": 5,
 *         "email": "test.1@gmail.com",
 *         "nick_name": "Ahmed",
 *         "agreed": "1",
 *         "email_verified_at": "2020-10-02 14:10:05",
 *         "created_at": "2020-10-02 13:49:34",
 *         "updated_at": "2020-10-02 14:10:05",
 *         "verify_code": null,
 *         "wallet_address": null,
 *         "KYC_result": "N",
 *         "description": null,
 *         "inactive": 0,
 *         "user_grade_id": 1,
 *         "score": null,
 *         "ip": null,
 *         "login_status": null,
 *         "original_file": null,
 *         "stored_file": null,
 *         "phone_number": null,
 *         "phone_number_verified": null,
 *         "signup_method_id": null,
 *         "setting_notification_email": null,
 *         "setting_notification_sms": null,
 *         "setting_notification_app_push": null,
 *         "setting_notification_last_update": null,
 *         "setting_notification_ewallet": null,
 *         "sms_verification_code": null,
 *         "original_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "stored_file": "http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "image":"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn",
 *         "kong": 20,
 *         "bonus_kong": 0,
 *         "total": 20     
 *     }
 * }
 * @apiErrorExample {json} Missing parameters
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "status": false,
 *     "error": "Invalid request."
 * }
 * @apiErrorExample {json} Invalid access token
 * HTTP/1.1 422 Unprocessable Entity
 * {
 *     "status": false,
 *     "error": "this access token does not exist"
 * }
 */

/**
 * @api {post} /api/user/email/search/v1 Search Email
 * @apiGroup User
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} search Search search(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": [
 *         {
 *           "id": 9,
 *           "nick_name": "test",
 *           "email": "test@gmail.com"
 *           },
 *           {
 *               "id": 10,
 *               "nick_name": "test1",
 *               "email": "test1@gmail.com"
 *           },
 *           {
 *               "id": 11,
 *               "nick_name": "test1",
 *               "email": "tesy1@gmail.com"
 *           }
 *     ]
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *  {
 *     "error": "Validation failed",
 *     "description": [
 *         "The search field is required."
 *     ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/kong_mileage/v1 Kong Mileage
 * @apiGroup Kong Mileage
 * @apiParam {String} access_token Access Token(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": {
 *           "kong": 20,
 *           "bonus_kong": 0,
 *           "total": 20
 *       }
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/kong_mileage/detail/v1 Kong Mileage Detail
 * @apiGroup Kong Mileage
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} limit Pass limit as 10 default set 10
 * @apiParam {String} offset Pass offset as 0 default set 0
 * @apiParam {String} category_type Pass category code
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": [
 *       {
 *           "id": 1,
 *           "short_name_kr": "충전",
 *           "full_name_kr": "신용카드 충전",
 *           "date": "2020 10 13",
 *           "accumulated_km": "10",
 *           "used_km": "10",
 *           "timestamps": "2020 10 13 15:44:31",
 *           "charged_km": 0,
 *           "description": "Test",
 *           "gift_sender_nickname": "New",
 *           "gift_receiver_nickname": "New",
 *           "category_code": "CC",
 *           "gift_sender_email": "bhavesh.sachala@gmail.com",
 *           "gift_receiver_email": "parth.d@cearsinfotech.com"
 *       },
 *       {
 *           "id": 2,
 *           "short_name_kr": "충전",
 *           "full_name_kr": "신용카드 충전",
 *           "date": "2020 10 14",
 *           "accumulated_km": "10",
 *           "used_km": "10",
 *           "timestamps": "2020 10 14 15:44:31",
 *           "charged_km": 0,
 *           "description": "Test",
 *           "gift_sender_nickname": "New",
 *           "gift_receiver_nickname": "New",
 *           "category_code": "CC",
 *           "gift_sender_email": "bhavesh.sachala@gmail.com",
 *           "gift_receiver_email": "parth.d@cearsinfotech.com"
 *       }
 *   ]
 * }
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {get} /api/kong_mileage/category/v1 Kong Mileage Category List
 * @apiGroup Kong Mileage
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": [
 *       {
 *           "id": 1,
 *           "code": "CM",
 *           "short_name_kr": "전환",
 *           "short_name_en": "Conversion",
 *           "full_name_kr": "마일리지 전환",
 *           "full_name_en": "Mileage conversion"
 *       },
 *       {
 *           "id": 2,
 *           "code": "CC",
 *           "short_name_kr": "충전",
 *           "short_name_en": "Charge",
 *           "full_name_kr": "신용카드 충전",
 *           "full_name_en": "Creditcard charge"
 *       },
 *       {
 *           "id": 3,
 *           "code": "CG",
 *           "short_name_kr": "선물",
 *           "short_name_en": "Gift",
 *           "full_name_kr": "선물",
 *           "full_name_en": "Gift"
 *       },
 *       {
 *           "id": 4,
 *           "code": "CB",
 *           "short_name_kr": "보너스",
 *           "short_name_en": "Bonus",
 *           "full_name_kr": "보너스",
 *           "full_name_en": "Bonus"
 *       },
 *       {
 *           "id": 5,
 *           "code": "CP",
 *           "short_name_kr": "구매",
 *           "short_name_en": "Purchase",
 *           "full_name_kr": "구매",
 *           "full_name_en": "Purchase"
 *       }
 *   ]
 * }
 */


/**
 * @api {post} /api/kong_mileage/km_gift/v1 KM Gift
 * @apiGroup Kong Mileage
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} receiver_id Receiver Id(required)
 * @apiParam {String} amount Amount(required)
 * @apiParam {String} km_transaction_code KM Transaction Code(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Integer} response.data Total Kong(Kong + Bonus Kong)
 * 
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": 10
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *       "The receiver id field is required.",
 *       "The amount field is required.",
 *       "The km transaction code field is required."
 *   ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/user/check_user_exists/v1 User Email Exists
 * @apiGroup User
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} email Email(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": {
 *          "id": 9,
 *          "email": "test@gmail.com",
 *          "nick_name": "test"
 *      }
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *       "The email field is required."
 *   ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 * {
 *     "error": "Unauthorized access"
 * }
 * @apiErrorExample {json} Email not exist error
 * HTTP/1.1 422 Email not exist
 * {
 *     "status": false,
 *     "message": "Email does not exist."
 * }
 */



/**
 * @api {post} /api/contents/list/v1 Contents List
 * @apiGroup Contents
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} category_id Category Id(required)
 * @apiParam {String} languageCode Language Code(required, Ex. en or ko) 
 * @apiParam {String} search Filter contents title 
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": [
 *         {
 *              "id": 1,
 *              "category_name": "이미지",
 *              "title": "Test",
 *              "summary": "Test",
 *              "sale_price": "100",
 *              "image": "http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2Uvd2duM3RyR3Z0TFdDNmRvNUs2czZCUVZDaTVNZEFSY0NsamJOVEJHUy5wbmc=",
 *              "tag_id": 1,
 *              "tag_name": "Test",
 *              "description": "Test",
 *              "useful_information": "Test",
 *              "isFavorite": 0
 *          }
 *     ]
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *       "The category id field is required."
 *       "The language code field is required."
 *   ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/contents/detail/v1 Contents detail
 * @apiGroup Contents
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} id Contents Id(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": {
 *          "id": 1,
 *          "title": "Test",
 *          "tag_id": 1,
 *          "tag_name": "Test",
 *          "description": "Test",
 *          "summary": "Test",
 *          "useful_information": "Test",
 *          "sale_price": "100"
 *      }
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *       "The id field is required."
 *   ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/contents/buy/v1 Contents Popup Buy
 * @apiGroup Contents
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} id Contents Id(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": {
 *         "id": 1,
 *         "title": "Test",
 *         "sale_price": "100"
 *      }
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *       "The id field is required."
 *   ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {get} /api/contents_category/list/v1 Contents Category List
 * @apiGroup Contents
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": [
 *          {
 *              "id": 1,
 *              "name_kr": "Test Category",
 *              "name_en": "",
 *              "image": ""
 *          },
 *          {
 *              "id": 2,
 *              "name_kr": "동영상",
 *              "name_en": "Video",
 *              "image": ""
 *          },
 *          {
 *              "id": 3,
 *              "name_kr": "이미지",
 *              "name_en": "Image",
 *              "image": ""
 *          },
 *          {
 *              "id": 4,
 *              "name_kr": "문서",
 *              "name_en": "Document",
 *              "image": ""
 *          }
 *   ]
 * }
 */



/**
 * @api {post} /api/contents/register/v1 Contents Register
 * @apiGroup Contents
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} title Title(required)
 * @apiParam {String} description Description(required)
 * @apiParam {String} content_type Content type(required, I: Image, V: Video, D: Document)
 * @apiParam {String} price Price(required)
 * @apiParam {String} my_content_flag My content flag(required, Always Y)
 * @apiParam {String} content_file File(required, jpeg, png, docx, doc, xlsx, mp4, m4a, m4p, m4b, m4r, m4v, pptx, ppt, pdf, hwp)
 * @apiParam {String} thumb_image File(Thumb image for video)
 
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": {
 *          "title": "Testing",
 *          "description": "Testing Description",
 *          "sale_price": "1000",
 *          "cp_purchase_price": "1000",
 *          "content_tag_id": 1,
 *          "my_content_flag": "Y",
 *          "created_at": "2020-10-27 19:49:37",
 *          "content_type": "I",
 *          "contents_provider_user_id": 19,
 *          "contents_provider_user_email": "shilpavania26@naver.com",
 *          "stored_thumb_image": "http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvTXBYM2VLckxKbjlMNktlbEw4VFZtdzFVa3BTeWl0VUFKMUtUeklLTi5wbmc=",
 *          "original_thumb_image": "document.png",
 *          "stored_image": "http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvTXBYM2VLckxKbjlMNktlbEw4VFZtdzFVa3BTeWl0VUFKMUtUeklLTi5wbmc=",
 *          "original_image": "document.png",
 *          "id": 7,
 *          "thumb_image": "http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvRWYzcVhhdVR3eFlUdmx3Y0h2Z3IxMEJrOXRSa3JwQ0YwYm9CQlUyaC5wbmc="
 *      }
 * }
 * @apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *      "The title field is required.",
 *      "The description field is required.",
 *      "The content type field is required.",
 *      "The price field is required.",
 *      "The my content flag field is required.",
 *      "The content file field is required."
 *  ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/contents/shared/list/v1 Shared Contents List
 * @apiGroup Contents
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} languageCode Language Code(required, Ex. en or ko)
 * @apiParam {String} type_id Type Id(I: Image, V: Video, D: Documen, All for blank)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Array Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *     "status": true,
 *     "error": "",
 *     "data": [
 *           {
 *              "id": 7,
 *              "image": "http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvTXBYM2VLckxKbjlMNktlbEw4VFZtdzFVa3BTeWl0VUFKMUtUeklLTi5wbmc=",
 *              "title": "Testing",
 *              "description": "Testing Description",
 *              "date": "2020-10-27 19:49:37",
 *              "category_name": "Test Category",
 *              "price": "1000",
 *              "content_type": "I",
 *              "thumb_image": "http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvRWYzcVhhdVR3eFlUdmx3Y0h2Z3IxMEJrOXRSa3JwQ0YwYm9CQlUyaC5wbmc="
 *           }
 *     ]
 * }
 * 
 *@apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *     "The language code field is required."
 *  ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/contents/confirm_price/v1 Content Confirm Price
 * @apiGroup Contents
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} quantity Quantity(required)
 * @apiParam {String} content_id Content Id(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {Object} response.data DATA Object
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "status": true,
 *      "error": "",
 *      "data": {
 *          "flag": 0,
 *          "kong": 160,
 *          "purchase_price": 200,
 *          "quantity": "2",
 *          "title":"Test"
 *      }
 * }
 * 
 *@apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *     "The quantity field is required.",
 *     "The content id field is required."
 *  ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */


/**
 * @api {post} /api/contents/wishlist/v1 Content Add/Remove Favorite List
 * @apiGroup Contents
 * @apiParam {String} access_token Access Token(required)
 * @apiParam {String} content_id Content Id(required)
 * @apiSuccess {Boolean} response.status {true:success, false:fail}
 * @apiSuccess {String} response.error {null: No error, String:Error description}
 * @apiSuccess {String} response.message Response Message
 * @apiSuccess {Integer} response.flag (Add = 1, Remove = 2 )
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "status": true,
 *      "error": "",
 *      "message": "Content favorite list in added successfully.",
 *      "flag":1
 * }
 * 
 *@apiErrorExample {json} Missing parameter
 * HTTP/1.1 422 Unprocessable Entity
 *{
 *   "error": "Validation failed",
 *   "description": [
 *     "The content id field is required."
 *  ]
 *}
 * @apiErrorExample {json} Unauthorized access error
 * HTTP/1.1 401 Unauthorized
 *  {
 *     "error": "Unauthorized access"
 * }
 */