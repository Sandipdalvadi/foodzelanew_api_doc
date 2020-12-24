define({ "api": [
  {
    "type": "get",
    "url": "/api/contents_category/list/v1",
    "title": "Contents Category List",
    "group": "Contents",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": [\n         {\n             \"id\": 1,\n             \"name_kr\": \"Test Category\",\n             \"name_en\": \"\",\n             \"image\": \"\"\n         },\n         {\n             \"id\": 2,\n             \"name_kr\": \"동영상\",\n             \"name_en\": \"Video\",\n             \"image\": \"\"\n         },\n         {\n             \"id\": 3,\n             \"name_kr\": \"이미지\",\n             \"name_en\": \"Image\",\n             \"image\": \"\"\n         },\n         {\n             \"id\": 4,\n             \"name_kr\": \"문서\",\n             \"name_en\": \"Document\",\n             \"image\": \"\"\n         }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "GetApiContents_categoryListV1"
  },
  {
    "type": "post",
    "url": "/api/contents/buy/v1",
    "title": "Contents Popup Buy",
    "group": "Contents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contents Id(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": {\n        \"id\": 1,\n        \"title\": \"Test\",\n        \"sale_price\": \"100\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n      \"The id field is required.\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "PostApiContentsBuyV1"
  },
  {
    "type": "post",
    "url": "/api/contents/confirm_price/v1",
    "title": "Content Confirm Price",
    "group": "Contents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_id",
            "description": "<p>Content Id(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": true,\n     \"error\": \"\",\n     \"data\": {\n         \"flag\": 0,\n         \"kong\": 160,\n         \"purchase_price\": 200,\n         \"quantity\": \"2\",\n         \"title\":\"Test\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n    \"The quantity field is required.\",\n    \"The content id field is required.\"\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "PostApiContentsConfirm_priceV1"
  },
  {
    "type": "post",
    "url": "/api/contents/detail/v1",
    "title": "Contents detail",
    "group": "Contents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contents Id(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": {\n         \"id\": 1,\n         \"title\": \"Test\",\n         \"tag_id\": 1,\n         \"tag_name\": \"Test\",\n         \"description\": \"Test\",\n         \"summary\": \"Test\",\n         \"useful_information\": \"Test\",\n         \"sale_price\": \"100\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n      \"The id field is required.\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "PostApiContentsDetailV1"
  },
  {
    "type": "post",
    "url": "/api/contents/list/v1",
    "title": "Contents List",
    "group": "Contents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>Category Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "languageCode",
            "description": "<p>Language Code(required, Ex. en or ko)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Filter contents title</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": [\n        {\n             \"id\": 1,\n             \"category_name\": \"이미지\",\n             \"title\": \"Test\",\n             \"summary\": \"Test\",\n             \"sale_price\": \"100\",\n             \"image\": \"http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2Uvd2duM3RyR3Z0TFdDNmRvNUs2czZCUVZDaTVNZEFSY0NsamJOVEJHUy5wbmc=\",\n             \"tag_id\": 1,\n             \"tag_name\": \"Test\",\n             \"description\": \"Test\",\n             \"useful_information\": \"Test\",\n             \"isFavorite\": 0\n         }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n      \"The category id field is required.\"\n      \"The language code field is required.\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "PostApiContentsListV1"
  },
  {
    "type": "post",
    "url": "/api/contents/register/v1",
    "title": "Contents Register",
    "group": "Contents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_type",
            "description": "<p>Content type(required, I: Image, V: Video, D: Document)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "my_content_flag",
            "description": "<p>My content flag(required, Always Y)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_file",
            "description": "<p>File(required, jpeg, png, docx, doc, xlsx, mp4, m4a, m4p, m4b, m4r, m4v, pptx, ppt, pdf, hwp)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumb_image",
            "description": "<p>File(Thumb image for video)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": {\n         \"title\": \"Testing\",\n         \"description\": \"Testing Description\",\n         \"sale_price\": \"1000\",\n         \"cp_purchase_price\": \"1000\",\n         \"content_tag_id\": 1,\n         \"my_content_flag\": \"Y\",\n         \"created_at\": \"2020-10-27 19:49:37\",\n         \"content_type\": \"I\",\n         \"contents_provider_user_id\": 19,\n         \"contents_provider_user_email\": \"shilpavania26@naver.com\",\n         \"stored_thumb_image\": \"http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvTXBYM2VLckxKbjlMNktlbEw4VFZtdzFVa3BTeWl0VUFKMUtUeklLTi5wbmc=\",\n         \"original_thumb_image\": \"document.png\",\n         \"stored_image\": \"http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvTXBYM2VLckxKbjlMNktlbEw4VFZtdzFVa3BTeWl0VUFKMUtUeklLTi5wbmc=\",\n         \"original_image\": \"document.png\",\n         \"id\": 7,\n         \"thumb_image\": \"http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvRWYzcVhhdVR3eFlUdmx3Y0h2Z3IxMEJrOXRSa3JwQ0YwYm9CQlUyaC5wbmc=\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n     \"The title field is required.\",\n     \"The description field is required.\",\n     \"The content type field is required.\",\n     \"The price field is required.\",\n     \"The my content flag field is required.\",\n     \"The content file field is required.\"\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "PostApiContentsRegisterV1"
  },
  {
    "type": "post",
    "url": "/api/contents/shared/list/v1",
    "title": "Shared Contents List",
    "group": "Contents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "languageCode",
            "description": "<p>Language Code(required, Ex. en or ko)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type_id",
            "description": "<p>Type Id(I: Image, V: Video, D: Documen, All for blank)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": [\n          {\n             \"id\": 7,\n             \"image\": \"http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvTXBYM2VLckxKbjlMNktlbEw4VFZtdzFVa3BTeWl0VUFKMUtUeklLTi5wbmc=\",\n             \"title\": \"Testing\",\n             \"description\": \"Testing Description\",\n             \"date\": \"2020-10-27 19:49:37\",\n             \"category_name\": \"Test Category\",\n             \"price\": \"1000\",\n             \"content_type\": \"I\",\n             \"thumb_image\": \"http://54.180.80.195/admin/content/image/cHVibGljL2NvbnRlbnRfaW1hZ2UvRWYzcVhhdVR3eFlUdmx3Y0h2Z3IxMEJrOXRSa3JwQ0YwYm9CQlUyaC5wbmc=\"\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n    \"The language code field is required.\"\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "PostApiContentsSharedListV1"
  },
  {
    "type": "post",
    "url": "/api/contents/wishlist/v1",
    "title": "Content Add/Remove Favorite List",
    "group": "Contents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content_id",
            "description": "<p>Content Id(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "response.flag",
            "description": "<p>(Add = 1, Remove = 2 )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": true,\n     \"error\": \"\",\n     \"message\": \"Content favorite list in added successfully.\",\n     \"flag\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n    \"The content id field is required.\"\n ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Contents",
    "name": "PostApiContentsWishlistV1"
  },
  {
    "type": "get",
    "url": "/api/faq/{lang}/v1",
    "title": "Get FAQ List",
    "group": "FAQs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>{ko:Korean, en:English}(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.faq",
            "description": "<p>FAQ Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"faq\": [\n        {\n            \"question\": \"테스트 제목\",\n            \"answer\": \"텍스트는 테스트 목적으로 만 사용됩니다.\",\n            \"order\": 1,\n            \"created_at\": \"2020-09-23 13:05:13\",\n            \"updated_at\": \"2020-09-23 13:05:13\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "FAQs",
    "name": "GetApiFaqLangV1"
  },
  {
    "type": "post",
    "url": "/api/faq/{lang}/search/v1",
    "title": "Search FAQ",
    "group": "FAQs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>{ko:Korean, en:English}(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "term",
            "description": "<p>Search term(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.faq",
            "description": "<p>FAQ Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"faq\": [\n        {\n            \"question\": \"테스트 제목\",\n            \"answer\": \"텍스트는 테스트 목적으로 만 사용됩니다.\",\n            \"order\": 1,\n            \"created_at\": \"2020-09-23 13:05:13\",\n            \"updated_at\": \"2020-09-23 13:05:13\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n {\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The term field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "FAQs",
    "name": "PostApiFaqLangSearchV1"
  },
  {
    "type": "get",
    "url": "/api/kong_mileage/category/v1",
    "title": "Kong Mileage Category List",
    "group": "Kong_Mileage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": [\n      {\n          \"id\": 1,\n          \"code\": \"CM\",\n          \"short_name_kr\": \"전환\",\n          \"short_name_en\": \"Conversion\",\n          \"full_name_kr\": \"마일리지 전환\",\n          \"full_name_en\": \"Mileage conversion\"\n      },\n      {\n          \"id\": 2,\n          \"code\": \"CC\",\n          \"short_name_kr\": \"충전\",\n          \"short_name_en\": \"Charge\",\n          \"full_name_kr\": \"신용카드 충전\",\n          \"full_name_en\": \"Creditcard charge\"\n      },\n      {\n          \"id\": 3,\n          \"code\": \"CG\",\n          \"short_name_kr\": \"선물\",\n          \"short_name_en\": \"Gift\",\n          \"full_name_kr\": \"선물\",\n          \"full_name_en\": \"Gift\"\n      },\n      {\n          \"id\": 4,\n          \"code\": \"CB\",\n          \"short_name_kr\": \"보너스\",\n          \"short_name_en\": \"Bonus\",\n          \"full_name_kr\": \"보너스\",\n          \"full_name_en\": \"Bonus\"\n      },\n      {\n          \"id\": 5,\n          \"code\": \"CP\",\n          \"short_name_kr\": \"구매\",\n          \"short_name_en\": \"Purchase\",\n          \"full_name_kr\": \"구매\",\n          \"full_name_en\": \"Purchase\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Kong_Mileage",
    "name": "GetApiKong_mileageCategoryV1"
  },
  {
    "type": "post",
    "url": "/api/kong_mileage/detail/v1",
    "title": "Kong Mileage Detail",
    "group": "Kong_Mileage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Pass limit as 10 default set 10</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>Pass offset as 0 default set 0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_type",
            "description": "<p>Pass category code</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": [\n      {\n          \"id\": 1,\n          \"short_name_kr\": \"충전\",\n          \"full_name_kr\": \"신용카드 충전\",\n          \"date\": \"2020 10 13\",\n          \"accumulated_km\": \"10\",\n          \"used_km\": \"10\",\n          \"timestamps\": \"2020 10 13 15:44:31\",\n          \"charged_km\": 0,\n          \"description\": \"Test\",\n          \"gift_sender_nickname\": \"New\",\n          \"gift_receiver_nickname\": \"New\",\n          \"category_code\": \"CC\",\n          \"gift_sender_email\": \"bhavesh.sachala@gmail.com\",\n          \"gift_receiver_email\": \"parth.d@cearsinfotech.com\"\n      },\n      {\n          \"id\": 2,\n          \"short_name_kr\": \"충전\",\n          \"full_name_kr\": \"신용카드 충전\",\n          \"date\": \"2020 10 14\",\n          \"accumulated_km\": \"10\",\n          \"used_km\": \"10\",\n          \"timestamps\": \"2020 10 14 15:44:31\",\n          \"charged_km\": 0,\n          \"description\": \"Test\",\n          \"gift_sender_nickname\": \"New\",\n          \"gift_receiver_nickname\": \"New\",\n          \"category_code\": \"CC\",\n          \"gift_sender_email\": \"bhavesh.sachala@gmail.com\",\n          \"gift_receiver_email\": \"parth.d@cearsinfotech.com\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Kong_Mileage",
    "name": "PostApiKong_mileageDetailV1"
  },
  {
    "type": "post",
    "url": "/api/kong_mileage/km_gift/v1",
    "title": "KM Gift",
    "group": "Kong_Mileage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>Receiver Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "km_transaction_code",
            "description": "<p>KM Transaction Code(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "response.data",
            "description": "<p>Total Kong(Kong + Bonus Kong)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": 10\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n      \"The receiver id field is required.\",\n      \"The amount field is required.\",\n      \"The km transaction code field is required.\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Kong_Mileage",
    "name": "PostApiKong_mileageKm_giftV1"
  },
  {
    "type": "post",
    "url": "/api/kong_mileage/v1",
    "title": "Kong Mileage",
    "group": "Kong_Mileage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": {\n          \"kong\": 20,\n          \"bonus_kong\": 0,\n          \"total\": 20\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Kong_Mileage",
    "name": "PostApiKong_mileageV1"
  },
  {
    "type": "get",
    "url": "/api/user/notifications/status/v1",
    "title": "Get Notifications Status",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.notitication",
            "description": "<p>Notification object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"notitication\": {\n        \"setting_notification_ewallet\": true,\n        \"setting_notification_email\": false,\n        \"setting_notification_sms\": false,\n        \"setting_notification_app_push\": false,\n        \"setting_notification_last_update\": \"2020-09-23 15:23:34\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Notifications",
    "name": "GetApiUserNotificationsStatusV1"
  },
  {
    "type": "post",
    "url": "/api/user/ewallet_notification/change/v1",
    "title": "Toggle E-Wallet Notification",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ewallet_notification",
            "description": "<p>{0:disable, 1:enable} (required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"E-Wallet notification status saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing Parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"ewallet notification field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Validation failed",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The selected ewallet notification is invalid.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Notifications",
    "name": "PostApiUserEwallet_notificationChangeV1"
  },
  {
    "type": "post",
    "url": "/api/user/other_notification/change/v1",
    "title": "Toggle Other Notifications",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_notification",
            "description": "<p>{0:disable, 1:enable} (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sms_notification",
            "description": "<p>{0:disable, 1:enable} (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_push_notification",
            "description": "<p>{0:disable, 1:enable} (required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"Notification status saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing Parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The email notification field is required.\",\n        \"The sms notification field is required.\",\n        \"The app push notification field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Validation failed",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The selected email notification is invalid.\",\n        \"The selected sms notification is invalid.\",\n        \"The selected app push notification is invalid.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Notifications",
    "name": "PostApiUserOther_notificationChangeV1"
  },
  {
    "type": "post",
    "url": "/api/user/phone/verify/v1",
    "title": "Verify Phone Number",
    "group": "Phone_Verification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Verification code(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"Phone number verified successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing Parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The code field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Validation failed(1)",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"Verification code has 4 digits only.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Validation failed(2)",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n   \"error\": \"Validation failed\",\n    \"description\": [\n        \"The code must be a number.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Phone_Verification",
    "name": "PostApiUserPhoneVerifyV1"
  },
  {
    "type": "post",
    "url": "/api/user/sms_verification_code/send/v1",
    "title": "Send Phone Verify Code",
    "group": "Phone_Verification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Phone Number(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"Verification code has been sent successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing Parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The phone number field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Phone_Verification",
    "name": "PostApiUserSms_verification_codeSendV1"
  },
  {
    "type": "post",
    "url": "/api/user/qa/submit/v1",
    "title": "Submit QA",
    "group": "QA",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Question(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>Language Code(Ex. en, ko)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "attachment[]",
            "description": "<p>Attachment(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"QA submitted successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The title field is required.\",\n        \"The question field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Maximum upload filesize",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The attachment.0 may not be greater than 20480 kilobytes.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "QA",
    "name": "PostApiUserQaSubmitV1"
  },
  {
    "type": "post",
    "url": "/api/user/login/google/v1",
    "title": "Sign-In with Google",
    "group": "Social_Networks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token obtained after sign-in with Google(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Nick name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>Device Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_token",
            "description": "<p>Device Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device Type(required, 1 For Android AND 2 For IOS)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"access_token\": \"e1762acfcc4685a4e5f2356b3aa88c7bf144fd7730a6fe6c6c5a049979cbbe61\",\n    \"user\": {\n        \"id\": 5,\n        \"email\": \"test.1@gmail.com\",\n        \"nick_name\": \"Ahmed\",\n        \"agreed\": \"1\",\n        \"email_verified_at\": \"2020-10-02 14:10:05\",\n        \"created_at\": \"2020-10-02 13:49:34\",\n        \"updated_at\": \"2020-10-02 14:10:05\",\n        \"verify_code\": null,\n        \"wallet_address\": null,\n        \"KYC_result\": \"N\",\n        \"description\": null,\n        \"inactive\": 0,\n        \"user_grade_id\": 1,\n        \"score\": null,\n        \"ip\": null,\n        \"login_status\": null,\n        \"original_file\": null,\n        \"stored_file\": null,\n        \"phone_number\": null,\n        \"phone_number_verified\": null,\n        \"signup_method_id\": null,\n        \"setting_notification_email\": null,\n        \"setting_notification_sms\": null,\n        \"setting_notification_app_push\": null,\n        \"setting_notification_last_update\": null,\n        \"setting_notification_ewallet\": null,\n        \"sms_verification_code\": null,\n        \"original_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"stored_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"image\":\"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"kong\": 20,\n        \"bonus_kong\": 0,\n        \"total\": 20\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameters",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"status\": false,\n    \"error\": \"Invalid request.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalid access token",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"status\": false,\n    \"error\": \"Invalid access token.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Social_Networks",
    "name": "PostApiUserLoginGoogleV1"
  },
  {
    "type": "post",
    "url": "/api/user/login/kakaotalk/v1",
    "title": "Sign-In with Kakaotalk",
    "group": "Social_Networks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token obtained after sign-in with Kakaotalk(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Nick name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>Device Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_token",
            "description": "<p>Device Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device Type(required, 1 For Android AND 2 For IOS)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"access_token\": \"e1762acfcc4685a4e5f2356b3aa88c7bf144fd7730a6fe6c6c5a049979cbbe61\",\n    \"user\": {\n        \"id\": 5,\n        \"email\": \"test.1@gmail.com\",\n        \"nick_name\": \"Ahmed\",\n        \"agreed\": \"1\",\n        \"email_verified_at\": \"2020-10-02 14:10:05\",\n        \"created_at\": \"2020-10-02 13:49:34\",\n        \"updated_at\": \"2020-10-02 14:10:05\",\n        \"verify_code\": null,\n        \"wallet_address\": null,\n        \"KYC_result\": \"N\",\n        \"description\": null,\n        \"inactive\": 0,\n        \"user_grade_id\": 1,\n        \"score\": null,\n        \"ip\": null,\n        \"login_status\": null,\n        \"original_file\": null,\n        \"stored_file\": null,\n        \"phone_number\": null,\n        \"phone_number_verified\": null,\n        \"signup_method_id\": null,\n        \"setting_notification_email\": null,\n        \"setting_notification_sms\": null,\n        \"setting_notification_app_push\": null,\n        \"setting_notification_last_update\": null,\n        \"setting_notification_ewallet\": null,\n        \"sms_verification_code\": null,\n        \"original_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"stored_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"image\":\"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"kong\": 20,\n        \"bonus_kong\": 0,\n        \"total\": 20     \n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameters",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"status\": false,\n    \"error\": \"Invalid request.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalid access token",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"status\": false,\n    \"error\": \"this access token does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Social_Networks",
    "name": "PostApiUserLoginKakaotalkV1"
  },
  {
    "type": "post",
    "url": "/api/user/login/naver/v1",
    "title": "Sign-In with Naver",
    "group": "Social_Networks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token obtained after sign-in with Naver(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Nick name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>Device Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_token",
            "description": "<p>Device Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device Type(required, 1 For Android AND 2 For IOS)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"access_token\": \"e1762acfcc4685a4e5f2356b3aa88c7bf144fd7730a6fe6c6c5a049979cbbe61\",\n    \"user\": {\n        \"id\": 5,\n        \"email\": \"test.1@gmail.com\",\n        \"nick_name\": \"Ahmed\",\n        \"agreed\": \"1\",\n        \"email_verified_at\": \"2020-10-02 14:10:05\",\n        \"created_at\": \"2020-10-02 13:49:34\",\n        \"updated_at\": \"2020-10-02 14:10:05\",\n        \"verify_code\": null,\n        \"wallet_address\": null,\n        \"KYC_result\": \"N\",\n        \"description\": null,\n        \"inactive\": 0,\n        \"user_grade_id\": 1,\n        \"score\": null,\n        \"ip\": null,\n        \"login_status\": null,\n        \"phone_number\": null,\n        \"phone_number_verified\": null,\n        \"signup_method_id\": null,\n        \"setting_notification_email\": null,\n        \"setting_notification_sms\": null,\n        \"setting_notification_app_push\": null,\n        \"setting_notification_last_update\": null,\n        \"setting_notification_ewallet\": null,\n        \"sms_verification_code\": null,\n        \"original_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"stored_file\": \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"image\":\"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"kong\": 20,\n        \"bonus_kong\": 0,\n        \"total\": 20\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameters",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"status\": false,\n    \"error\": \"Invalid request.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalid access token",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"status\": false,\n    \"error\": \"Authentication failed (인증 실패하였습니다.)\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Social_Networks",
    "name": "PostApiUserLoginNaverV1"
  },
  {
    "type": "post",
    "url": "/api/user/register/social/v1",
    "title": "Sign Up",
    "group": "Social_Networks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-Mail address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Nick name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agreed",
            "description": "<p>{1:Agreed}(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>{google,naver,kakaotalk}(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n    \"status\": true,\n    \"error\": \"\",\n    \"user\": {\n        \"created_at\": \"2020-10-02 14:24:26\",\n        \"user_grade_id\": 1,\n        \"nick_name\": \"Ahmed\",\n        \"email\": \"test.2@gmail.com\",\n        \"agreed\": \"1\",\n        \"email_verified_at\": \"2020-10-02 14:24:26\",\n        \"verify_code\": null,\n        \"updated_at\": \"2020-10-02 14:24:26\",\n        \"id\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameters",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The email field is required.\",\n        \"The nick name field is required.\",\n        \"The agreed field is required.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Social_Networks",
    "name": "PostApiUserRegisterSocialV1"
  },
  {
    "type": "get",
    "url": "/api/terms/{lang}/v1",
    "title": "Terms",
    "group": "Terms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>{ko:Korean, en:English}(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.terms",
            "description": "<p>Terms Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"terms\": [\n        {\n            \"name\": \"Terms and service\",\n            \"content\": \"terms and service sample\",\n            \"order\": 1,\n            \"updated_at\": \"\"\n        },\n        {\n            \"name\": \"Privacy policy\",\n            \"content\": \"Privacy policy\",\n            \"order\": 2,\n            \"updated_at\": \"\"\n        },\n        {\n            \"name\": \"E-wallet terms\",\n            \"content\": \"E-wallet terms\",\n            \"order\": 3,\n            \"updated_at\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Terms",
    "name": "GetApiTermsLangV1"
  },
  {
    "type": "get",
    "url": "/api/my_page/v1",
    "title": "Get Details",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>Response error(if any)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.user",
            "description": "<p>User object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.user.user_grade",
            "description": "<p>User grade object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"user\": {\n        \"profile_image\": \"\",\n        \"user_grade\": {\n            \"id\": 1,\n            \"grade_kr\": \"그린\",\n            \"grade_en\": \"Green\",\n            \"description\": null\n        },\n        \"nick_name\": \"Ahmed\",\n        \"email\": \"engr.numaan@yahoo.com\",\n        \"phone_number\": null,\n        \"phone_number_verified\": false,\n        \"my_km\": 0,\n        \"total_user_km\": 0,\n        \"image\" : \"http://54.180.80.195/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9BYWhCakZ5QWxIV2kwUURlMnVpTUdQVlBvVklTd1lnYTl6OGVuMUdyLmpwZWd8aW1hZ2VfcGlja2VyX0ExMDA0QjBELTVGQjctNDg3OC05MTY4LTZEOUY5NUUwN0YyMy00MjkyOS0wMDAwMTdENDAwNDQwNURENjI0MkVBMjItNEM4My00RDNELTk1ODgtMzFFRkZEN0FGMkQ0X2NvbXByZXNzZWQuanBn\",\n        \"kong\": 20,\n        \"bonus_kong\": 0,\n        \"total\": 20\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "GetApiMy_pageV1"
  },
  {
    "type": "post",
    "url": "/api/login/v1",
    "title": "Sign In",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>Device Id(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_token",
            "description": "<p>Device Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device Type(required, 1 For Android AND 2 For IOS)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null:'', error:'Error message'}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.access_token",
            "description": "<p>Access Token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.user",
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
          "title": "Invalid request error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": false,\n\t\t \"error\": \"Invalid request.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Invalid credentials error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": false,\n\t\t \"error\": \"Invalid credentials.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Unverified email error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": false,\n\t\t \"error\": \"Unverified\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiLoginV1"
  },
  {
    "type": "post",
    "url": "/api/register/check/v1",
    "title": "Check Email",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address(required)</p>"
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
            "field": "response.status",
            "description": "<p>{false:success, true:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
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
          "title": "Invalid request error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": true,\n\t\t \"error\": \"Invalid request.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Email registered error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": true,\n\t\t \"message\": \"Email is already registered.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiRegisterCheckV1"
  },
  {
    "type": "post",
    "url": "/api/register/v1",
    "title": "Sign Up",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Nick Name(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agreed",
            "description": "<p>{1:Agreed}(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referee",
            "description": "<p>Referee Email Address</p>"
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
            "field": "status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Null or error message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.user",
            "description": "<p>User object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n  {\n  \"status\": true,\n  \"error\": \"\",\n  \"user\": {\n      \"nick_name\": \"Ahmed\",\n      \"email\": \"se.numaan@yahoo.com\",\n      \"agreed\": \"1\",\n      \"created_at\": \"2020-09-08 19:09:20\",\n      \"updated_at\": \"2020-09-08 19:09:20\",\n      \"id\": 2,\n      \"verify_code\": \"0aaa8ccf2a32b30a1db5c8e08fd29bc4\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid request error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": true,\n\t\t \"error\": \"Invalid request.\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Email registered error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": true,\n\t\t \"error\": \"Email already registered.\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiRegisterV1"
  },
  {
    "type": "post",
    "url": "/api/user/check_user_exists/v1",
    "title": "User Email Exists",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": {\n         \"id\": 9,\n         \"email\": \"test@gmail.com\",\n         \"nick_name\": \"test\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Validation failed\",\n  \"description\": [\n      \"The email field is required.\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        },
        {
          "title": "Email not exist error",
          "content": "HTTP/1.1 422 Email not exist\n{\n    \"status\": false,\n    \"message\": \"Email does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiUserCheck_user_existsV1"
  },
  {
    "type": "post",
    "url": "/api/user/email/search/v1",
    "title": "Search Email",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search search(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>DATA Array Object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"data\": [\n        {\n          \"id\": 9,\n          \"nick_name\": \"test\",\n          \"email\": \"test@gmail.com\"\n          },\n          {\n              \"id\": 10,\n              \"nick_name\": \"test1\",\n              \"email\": \"test1@gmail.com\"\n          },\n          {\n              \"id\": 11,\n              \"nick_name\": \"test1\",\n              \"email\": \"tesy1@gmail.com\"\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n {\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The search field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiUserEmailSearchV1"
  },
  {
    "type": "post",
    "url": "/api/user/logout/v1",
    "title": "Sign out",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"User logged out successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiUserLogoutV1"
  },
  {
    "type": "post",
    "url": "/api/user/nickname/update/v1",
    "title": "Modify Nickname",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick_name",
            "description": "<p>Nickname(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"Nick name updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing Parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The nick name field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostApiUserNicknameUpdateV1"
  },
  {
    "type": "post",
    "url": "/user/photo/upload/v1",
    "title": "Upload Photo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": "<p>{filetype: jpeg,png,bmp}(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "response.profile_image_url",
            "description": "<p>URL of user profile photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n    \"status\": true,\n    \"error\": \"\",\n    \"profile_image_url\": \"http://g9soft.iptime.org:7016/user/profile_image/cHVibGljL3VzZXJfcHJvZmlsZS9VTGVCZlM0NGF1cThXZ0RKVU9uUWE4bHcwU3JYdGVEZXZXZEZLb040LnBuZ3xkb3dubG9hZCAoMSkucG5n\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parameter missing",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The photo field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Validation error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The photo must be a file of type: jpeg, bmp, png.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User",
    "name": "PostUserPhotoUploadV1"
  },
  {
    "type": "post",
    "url": "/api/password/reset/v1",
    "title": "Password Reset",
    "group": "User_Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>{ko:Korean, en:English}(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": true,\n\"error\": \"\",\n\"message\": \"Reset password email was sent successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid request error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"error\": \"Validation failed\",\n\t\t \"description\":[\"The email field is required.\"]\n\t  }",
          "type": "json"
        },
        {
          "title": "Email not registered error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\t  {\n      \"status\": false,\n\t\t \"error\":\"Email is not registered\"\n\t  }",
          "type": "json"
        },
        {
          "title": "Invalid Language",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"status\": false,\n    \"error\": \"Invalid language.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User_Password",
    "name": "PostApiPasswordResetV1"
  },
  {
    "type": "post",
    "url": "/api/user/password/change/v1",
    "title": "Change Password",
    "group": "User_Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token(required)</p>"
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
            "field": "response.status",
            "description": "<p>{true:success, false:fail}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.error",
            "description": "<p>{null: No error, String:Error description}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.message",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"error\": \"\",\n    \"message\": \"Password has been updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Missing Parameter",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The password field is required.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Validation failed",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"error\": \"Validation failed\",\n    \"description\": [\n        \"The password must be at least 8 characters.\",\n        \"Password must have an English letter and a digit.\"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized access error",
          "content": "HTTP/1.1 401 Unauthorized\n {\n    \"error\": \"Unauthorized access\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User_Password",
    "name": "PostApiUserPasswordChangeV1"
  }
] });