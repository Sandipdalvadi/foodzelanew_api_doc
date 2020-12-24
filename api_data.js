define({ "api": [
  {
    "type": "get",
    "url": "/aboutUs/{lang}",
    "title": "About Us View",
    "group": "About_Us",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>Language Code(en or ar)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Load_view",
            "optional": false,
            "field": "Load_view",
            "description": "<p>About Us view load successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "About Us view load successfully",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "About_Us",
    "name": "GetAboutusLang"
  },
  {
    "type": "post",
    "url": "/api/categoriesList",
    "title": "Category List",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startLimit",
            "description": "<p>Start Limit</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Category list loaded successfully.'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>Total count of active Category</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Category array object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Updated Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Category not found",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Category not found.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Category",
    "name": "PostApiCategorieslist"
  },
  {
    "type": "post",
    "url": "/api/addRestaurent",
    "title": "Add Restaurent",
    "group": "Restaurent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "ownerLogo",
            "description": "<p>Owner Logo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.userId",
            "description": "<p>Restaurent Owner Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.name",
            "description": "<p>Restaurent Name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.loginToken",
            "description": "<p>Login Token(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Restaurent Added Succeessfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Restaurent object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Updated Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"status\": 0,\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Restaurent",
    "name": "PostApiAddrestaurent"
  },
  {
    "type": "post",
    "url": "/api/restaurentOwnerDocVerified",
    "title": "Restaurent Owner Document Verified",
    "group": "Restaurent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "liceneseDelivery",
            "description": "<p>Licenese Delivery(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "certificationShop",
            "description": "<p>Certification Shop(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "idProof",
            "description": "<p>ID Proof(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.loginToken",
            "description": "<p>Login Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.restaurentOwnerId",
            "description": "<p>Restaurent Owner Id(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Document verified Succeessfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Updated Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"status\": 0,\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Licence",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Licence is Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Shop certificate",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Shop certificate Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Id Proof",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Id Proof Required.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Restaurent",
    "name": "PostApiRestaurentownerdocverified"
  },
  {
    "type": "get",
    "url": "/termsCondition/{lang}",
    "title": "Terms & Condition View",
    "group": "Terms_Condition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>Language Code(en or ar)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Load_view",
            "optional": false,
            "field": "Load_view",
            "description": "<p>Terms &amp; condition view load successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "Terms and condition view load successfully",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Terms_Condition",
    "name": "GetTermsconditionLang"
  },
  {
    "type": "post",
    "url": "/api/changePassword",
    "title": "Change Password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Old Password(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New Password(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginToken",
            "description": "<p>Login Token(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Password Updated Successfully,'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Updated Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"status\": 0,\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Password Update",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Password Not Update.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Old Password is wrong",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Old Password is wrong.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiChangepassword"
  },
  {
    "type": "post",
    "url": "/api/editProfile",
    "title": "Edit Profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.loginToken",
            "description": "<p>Login Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.id",
            "description": "<p>User Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.name",
            "description": "<p>Name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.email",
            "description": "<p>Email(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.phone",
            "description": "<p>Phone(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json_content.password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "profilePic",
            "description": "<p>Profile Image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Profile Updated Succeessfully,'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Reset Link Sent To E-mail Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"status\": 0,\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Email already registered",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"This Email Already Exists.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiEditprofile"
  },
  {
    "type": "post",
    "url": "/api/forgotPassword",
    "title": "Forgot Password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Password Reset Link Sent To E-mail Successfully.'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Message object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Reset Link Sent To E-mail Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Email Not registered",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Email not registered with the system.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiForgotpassword"
  },
  {
    "type": "post",
    "url": "/api/getProfileDetails",
    "title": "Get ProfileDetails",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginToken",
            "description": "<p>Login Token(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Profile Detail get Succeessfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Updated Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"status\": 0,\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "User exists!",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"User Does not exists!\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiGetprofiledetails"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isSocial",
            "description": "<p>Is Social(required,0=Not Social, 1=Social)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(required, Phone or Email both in one required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone(required, Phone or Email both in one required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Device Type(required, 1=android,2=IOS)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceToken",
            "description": "<p>Device Token(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Login Successfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"status\": false,\n\t\t\"message\": \"Email does not exist.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Password Missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Password Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Invalid credential",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Invalid email or phone or password.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Inactive User",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"User is blocked.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Deleted User",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"User is deleted.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Pending User. ",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"User request is pending\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiLogin"
  },
  {
    "type": "post",
    "url": "/api/phoneResetPassword",
    "title": "Phone to Reset Password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'Password updated Succeessfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"success\": 1,\n\t\t\"message\": \"Password Updated Successfully.\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing perameter error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"All Fields Are Required.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Phone number not register",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": 0,\n\t\t \"error\": \"Phone number not registered\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiPhoneresetpassword"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "Sign Up(If Socical login or Social register always call this api)",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(If is social 0 email is required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role(required, 1=admin,2=restaurent owner, 3=driver, 4= user, 5= manager)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number(If is social 0 phone is required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isSocial",
            "description": "<p>Social or not(required, 1 For Social AND 0 For Not Social)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isEmailVerified",
            "description": "<p>Email verified or not(required, 1 For Verified AND 0 For Not Verified)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isPhoneVerified",
            "description": "<p>Phone verified or not(required, 1 For Verified AND 0 For Not Verified)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceToken",
            "description": "<p>Device Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Device Type(required, 1=android,2=IOS)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isActive",
            "description": "<p>User Status(required, 0=Inactive, 1=Active, 2=Pending)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "languageCode",
            "description": "<p>Language Code(required, en=English, ar=Arabic)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password(required, If is social 0 password is required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "socialType",
            "description": "<p>Social Type(If is social 1 socialType is required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "socialId",
            "description": "<p>Social Id(If is social 1 socialId is required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>{1:success, 0:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{message:'User Registered Succeessfully'}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n\t\t\"status\": true,\n\t\t\"error\": \"\",\n\t\t\"access_token\": \"$2y$10$GCTdtvyphepag1RdAZz8XeZd2ZDKC7./nVvEfLTFYCtDotbcq1JQ.\",\n\t\t\"user\": {\n\t\t\t\"id\": 1,\n\t\t\t\"email\": \"engr.numaan@yahoo.com\",\n\t\t\t\"agreed\": \"1\",\n\t\t\t\"email_verified_at\": \"2020-09-08 17:01:53\",\n\t\t\t\"created_at\": \"2020-09-08 17:01:53\",\n\t\t\t\"updated_at\": \"2020-09-08 17:01:53\",\n\t\t\t\"verify_code\": null,\n\t\t\t\"ring_wallet_address\": null,\n\t\t\t\"ethereum_wallet_address\": null,\n\t\t\t\"KYC_result\": \"N\",\n\t\t\t\"description\": null,\n\t\t\t\"inactive\": 0,\n\t\t\t\"user_grade_id\": null,\n         \"original_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n         \"stored_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n         \"image\":\"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n         \"kong\": 20,\n         \"bonus_kong\": 0,\n         \"total\": 20\n\t\t}\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Perameter required error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"success\" : 0, \n      \"message\" : \"All Fields Are Required\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Email already registered error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"success\" : 0, \n      \"message\" : \"This Email Already Exists\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Email or phone already registered error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"success\" : 0, \n      \"message\" : \"This Email or phone Email Already Exists\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiRegister"
  }
] });
