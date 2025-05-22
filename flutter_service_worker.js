'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4addb6c3dd5f7c72e1f3b3839e0576f5",
"assets/AssetManifest.bin.json": "2e4db2ed3745171bbe66428690b8f8fd",
"assets/AssetManifest.json": "ad83493b976c8c97a8cc21eaaedc0338",
"assets/assets/ActionOrder/Close_Reject.svg": "5bb9445b91b4d24d815ccf439241d6fa",
"assets/assets/ActionOrder/Done_Accepted.svg": "4749e4c2b1ad69ab96ddf48232c1870c",
"assets/assets/ActionOrder/Refresh.svg": "9a576e84098bb97a238c7c0b6dbb5f71",
"assets/assets/ActionOrder/Restart%2520Square.svg": "41ccea49e33befa8ad06e51f97f01755",
"assets/assets/CommonBars/approvals.svg": "ce217678ebeb8e123456c28d119a1aef",
"assets/assets/CommonBars/ApprovalsAcceptIcon.svg": "97504b604d3c90212e73da8a1f7f6ce5",
"assets/assets/CommonBars/approvalsIcon.svg": "0e55703d5c423dbcb1b13abfc3187e69",
"assets/assets/CommonBars/ApprovalsReferralIcon.svg": "20786d00043cad37217613f1ef6677f7",
"assets/assets/CommonBars/ApprovalsRejectIcon.svg": "459026ceac2c331a4253f9daee1b1766",
"assets/assets/CommonBars/ApprovalsReturnIcon.svg": "7abebc9c93c1fb0ddd961d155186aa41",
"assets/assets/CommonBars/arrowLeft.svg": "dbbb04878f981a8b752eaa3599da1a74",
"assets/assets/CommonBars/attachmentCamera.svg": "79119b7bb7f5b446844eeaf7af0c946a",
"assets/assets/CommonBars/attachmentGallery.svg": "4037cded05214cdac396edb7b2027f2c",
"assets/assets/CommonBars/attachmentItemsList.svg": "cdfa99b6274758fa291120564075ca7c",
"assets/assets/CommonBars/CloseButton.svg": "02dc028b6ff42001a5eaff7f7626ea3d",
"assets/assets/CommonBars/contactUs.svg": "c9967c3486e5e0f6e5526b35fb4735a4",
"assets/assets/CommonBars/defaultUser.jpg": "6f90fe16124751eae7e80eb7e76628aa",
"assets/assets/CommonBars/exit.svg": "2b93c9962b8884ec20c823df7d601030",
"assets/assets/CommonBars/homeIcon.svg": "7a161fc528241e8ba937296670320725",
"assets/assets/CommonBars/LogoTab.svg": "068cb6ef184c64878b1c43c91680a22d",
"assets/assets/CommonBars/mainMenue.svg": "8149257588aa3ab186a56e2337bbd242",
"assets/assets/CommonBars/notificationIcon.svg": "1b0321abba150fc28746f166a5ff2278",
"assets/assets/CommonBars/proceduresIcon.svg": "c47311651b52ae4f62984fc744676356",
"assets/assets/CommonBars/profile.png": "4bed33f54f2e64fdf59c28a2ff32dc28",
"assets/assets/CommonBars/search-normal.svg": "f2ab213186eedebb7affa3a6d093282a",
"assets/assets/CommonBars/settings.svg": "32e761d63c7fd9b7252c92259d2e16ca",
"assets/assets/CommonBars/trash.svg": "105e5e14b64c5b46281beba5f4852be8",
"assets/assets/Icons/ApprovalIcon.svg": "a12bba931153a2029fa6a897f3a1306c",
"assets/assets/Icons/ApprovalIconArrow.svg": "91d6c6d2ee9e294210f1e7431d61e72f",
"assets/assets/Icons/AttachmentList.svg": "a9077f21f659be6609218964e4435e49",
"assets/assets/Icons/Close_Reject.svg": "5bb9445b91b4d24d815ccf439241d6fa",
"assets/assets/Icons/Done_Accepted.svg": "4749e4c2b1ad69ab96ddf48232c1870c",
"assets/assets/Icons/EditRequestView.svg": "6ea7eca6d9cc46255de1a0b6d979cdb6",
"assets/assets/Icons/filter.svg": "bc8c8b6011995adbeba368c8e17845f4",
"assets/assets/Icons/FilterRequestView.svg": "bf5c8ddf157168e313b8a1460c271e22",
"assets/assets/Icons/homePage.jpg": "8a7cac8f175e3b7c472dd7c4a452e900",
"assets/assets/Icons/ItemsList.svg": "e154bc624ffdfe0579f2ed20cc2df4af",
"assets/assets/Icons/LanguageAR.svg": "305a632910971559ea452f0cb90dada3",
"assets/assets/Icons/LanguagEN.png": "61313250c37bf61f332288586a59df6d",
"assets/assets/Icons/loginPassword.jpg": "a589965d24abdf5c4a9b5f76b9b5ce18",
"assets/assets/Icons/loginUserName.jpg": "aa42288992313a4b92ada7436f89938f",
"assets/assets/Icons/logo.jpg": "3b361ae6a6a47c70e162facc2c15fcf2",
"assets/assets/Icons/logo.png": "a6f802c57cd767d93efc6213c1e6f51a",
"assets/assets/Icons/logo.svg": "c3f9afe7496dc9084dafac30fd9405cf",
"assets/assets/Icons/MenuIcon.svg": "ec0a851bdbe7e3367913d01027dbd1d4",
"assets/assets/Icons/MenuIconCopy_editMenuValue.svg": "78039da7e3182d5838063f9ea89c004f",
"assets/assets/Icons/MenuIconDelete.svg": "f6a9bfd2fa649003155f818c6dcf400e",
"assets/assets/Icons/MenuIconEdit.svg": "001e45ff7b3e209610c1c96fcc800241",
"assets/assets/Icons/MenuIconPreviewStatus.svg": "b790d9b113c7c1c4ca81aea967a0d8d8",
"assets/assets/Icons/MenuIconSave.svg": "f7bdb4560c384bb24a6df41c3c3e8887",
"assets/assets/Icons/MenuIconSaveDraft.svg": "2bbf223650eba8a1c99d634b4194d1c3",
"assets/assets/Icons/MenuLins.svg": "6a2a8b27c68b678d5a836efae2f1f594",
"assets/assets/Icons/orderIncome.svg": "26f9df2ef52aee4515bbc85c4857cd5b",
"assets/assets/Icons/orderOutcome.svg": "390b1aef2adff772e4d456b9976881b2",
"assets/assets/Icons/ProjectLocation.svg": "75417b903dc7365c505f871fbbf7fd56",
"assets/assets/Icons/Refresh.svg": "9a576e84098bb97a238c7c0b6dbb5f71",
"assets/assets/Icons/Restart%2520Square.svg": "41ccea49e33befa8ad06e51f97f01755",
"assets/assets/Icons/StockLocation.svg": "78bda2ac3fc4bb939ec1d6ee98626172",
"assets/assets/Icons/success_icon_component.svg": "592e9f9813d65c2e3246eb0952780a90",
"assets/assets/Icons/UserLogo.png": "a98647a3c9f74089c5421bfb6e648d40",
"assets/assets/Icons/UserLogo.svg": "16c5c95c495caefe14133b69f4afcbca",
"assets/assets/images/img.png": "bf5dec8faebae4d4119b9c0bfefda763",
"assets/assets/images/login.png": "7615324033e10f55577f515ceb731316",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3eca36d937216aee06e0fa291bc09fbe",
"assets/NOTICES": "c314e9c8dffa6d26a343d4cfb8966fe6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c006eddc5d052384faa42343c937dfc1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "956fa8f293316f90b61fd7e084109fd7",
"/": "956fa8f293316f90b61fd7e084109fd7",
"main.dart.js": "c65bbc55c43efe16a32ffb4455d9837d",
"manifest.json": "56dea94dcc01843f6e9c1b5f9cc82ce1",
"version.json": "657ccf5bdae5dcba7ba445ae7e5bb944"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
