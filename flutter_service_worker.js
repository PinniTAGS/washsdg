'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"aidlogo.png": "da32982a166c2d211b169ed517214b34",
"assets/AssetManifest.bin": "ac7ca810804c0e6005813e37cca4991d",
"assets/AssetManifest.bin.json": "e099fff8b935a396bb946b8c4f4be4ae",
"assets/AssetManifest.json": "e52ee99c7b46c0f8e76e0b6be5b23a5e",
"assets/assets/acaciawater.jpg": "c2274b5291e3e0973a41de30357be1dd",
"assets/assets/AFSRT_Logo.png": "b8f847e74a3d4fa74f7e39669862718f",
"assets/assets/aidenvironment_Logo.png": "c35a368d3c9f82c5940d8fad88d545b7",
"assets/assets/aidlogo.png": "da32982a166c2d211b169ed517214b34",
"assets/assets/aidlogoblack.png": "08077862eb8b390de190f4c004e47eac",
"assets/assets/AKVO_logo.png": "b30351d1e5d1f68965e2172037be8fed",
"assets/assets/Amref_logo.png": "17312e6b777d865e7255c15f33973700",
"assets/assets/Aubergine.png": "3d3fc319d8b7f4ae899cd5a6d1e58500",
"assets/assets/avator.png": "cac510d743f67181b9ce8424ff32788b",
"assets/assets/CARITAS.png": "89a7fb74e308f79bd69cde6132347357",
"assets/assets/dark.png": "1cd7274e8f99cc1984facaf50b5640f2",
"assets/assets/gis.jpeg": "568c9ba32a2ed5c01a0c2599b1e6235b",
"assets/assets/google_map_north_pole.png": "eaf3b4c37cb1ca979b802b4f32c378c8",
"assets/assets/google_map_south_pole.png": "bc1f3fc8afc5455ece9b0f426ac528ea",
"assets/assets/gwp.jpg": "638363aa585e25e56a899c27530aef48",
"assets/assets/hewasa_LOGO.png": "793746d7e6dd434d7fcc904222ff805b",
"assets/assets/igrac.jpg": "c83505a2f90799cdaaed099839ebca70",
"assets/assets/ihe.png": "7afc39e1b584b2502ca8df958a82961f",
"assets/assets/IRC_logo.png": "3e8fb452b5a0e427ef7ae1837c28136f",
"assets/assets/jese_logo.png": "a36963601f70905a71a8b8ac79e0c961",
"assets/assets/land.png": "362f29b2b0812f304ccfe625237d7521",
"assets/assets/logo.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"assets/assets/map.html": "a78611e58e5e456ad110fb2beb5a3af7",
"assets/assets/map.svg": "02fa0fd0f4444aa68f087fb0df343352",
"assets/assets/metameta.png": "f398740f42b29ca5f4a874c59ace16b7",
"assets/assets/NETWAS_Logo.png": "8cd0d2185774965795e461d9b558e35c",
"assets/assets/night.png": "09667b89aca0d455d88a1f183afbd8f0",
"assets/assets/normal.png": "2e94e5ff0d7af4b53d1d3e2c89714709",
"assets/assets/Practica_logo.png": "afa2b6ce9428a363de4c25393a3d45c6",
"assets/assets/rain.png": "57e8fbf379ded6ad591bf629047b5d38",
"assets/assets/Retro.png": "8923a123e61a4588e7e8da64f344da23",
"assets/assets/Ruaf_foundation_logo.png": "478861afe016373473f3a40de6636bc6",
"assets/assets/silver.png": "46e0c22d9caf0cb1822c875090b2c8b2",
"assets/assets/Simavi_Logo.png": "3f75b9e70936c4c4ab6c2df0c4a83613",
"assets/assets/Sliver.png": "46e0c22d9caf0cb1822c875090b2c8b2",
"assets/assets/stockholm.png": "cc395f8d16e7ba17d41e24bf27a4a4d5",
"assets/assets/svg/action.svg": "05881d9eaa0fb4ce2308fb74aa96bf4b",
"assets/assets/svg/all_ticket.svg": "ad5c01e6a791d3b41c60ad497fd5b224",
"assets/assets/svg/arrow.svg": "302c914497780c63b6ed62712f00a808",
"assets/assets/svg/check.svg": "1e94c72ae1e009f073d7cd49e619e948",
"assets/assets/svg/delete.svg": "27a9285e08fa0f26bcbe95ec3e24803c",
"assets/assets/svg/email.svg": "caf6e71fd05cfdd3d6b6e70c2fbbe4d2",
"assets/assets/svg/empty.svg": "c89f210ee170b363d58625d6155535f0",
"assets/assets/svg/exit.svg": "472cede9b69ca7969a825544b5328741",
"assets/assets/svg/file.svg": "2e21beb82f4a229747fee9067235124e",
"assets/assets/svg/home.svg": "1f4fc301183383494733a4093b8a3390",
"assets/assets/svg/inspection.svg": "0bdbb243336d07dacba34e197d1dcc22",
"assets/assets/svg/issue.svg": "55b024ccfc7f963e445e90d6ad497e7e",
"assets/assets/svg/lock.svg": "198a2bc194cdd6218f347fc81396c236",
"assets/assets/svg/logo.svg": "4b505a0ecaa71e3fa7879b1f473187fa",
"assets/assets/svg/menu.svg": "9bbf86bb1494a73d4e5bbda04204890c",
"assets/assets/svg/more.svg": "366c06e261180b662120b0a1ea621695",
"assets/assets/svg/my_ticket.svg": "4c235918eeb43ab21e3b7634e584a19f",
"assets/assets/svg/password.svg": "d6d981e9aeb10f8a5f5ec0c515b05235",
"assets/assets/svg/password_item.svg": "11f21b6869cf7c51730720762637a4f3",
"assets/assets/svg/person.svg": "8cab88a93b95966e0a686ff379b7d34c",
"assets/assets/svg/phone.svg": "9179e1365199c18052aaaaa0fd82d78c",
"assets/assets/svg/scan.svg": "a6681473d8fe1d6d86bf1c34b6a99d59",
"assets/assets/svg/search.svg": "0eb46e729fae1a447cc5c2392199d2f9",
"assets/assets/svg/send.svg": "355a02ed48118febbed60e325f0197d5",
"assets/assets/ubuntuhero.jpg": "da800c07714e0d5fa753be575cbb66ff",
"assets/assets/UWASNET_LOGO.png": "fd55d9e0f2e974df9f69aceff6d6abcf",
"assets/assets/verdant-earth-technologies.png": "87d3b07ae35da7a6e98b8ff8cfe706d0",
"assets/assets/waseu_logo.png": "a74217b43ff0f6715f93178a179bc460",
"assets/assets/Wash%2520Alliance_logo.png": "3aa0b32fa09f9fa4f31680be53fd71b6",
"assets/assets/Wash_sdg_logo.png": "2aaaed0d92ac8ae48bb5c45b0a6d0722",
"assets/assets/wocat.jpg": "7c1892dd49ca5796392077a70e5ba9bb",
"assets/assets/worldbank.png": "5c6e82ef5e87d945a41d931d35bf935e",
"assets/FontManifest.json": "540bc686e066e986b314c71223fbcc49",
"assets/fonts/MaterialIcons-Regular.otf": "10e78e0ca66195d51dc3a7d290d6aac5",
"assets/NOTICES": "38566373d069fb827b22c59b5d005139",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/wiredash/assets/images/logo_white.png": "d51118529c8b6f919c485cd81e9a840e",
"assets/packages/wiredash/lib/assets/fonts/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/packages/wiredash/lib/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/packages/wiredash/lib/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/packages/wiredash/lib/assets/fonts/Wirecons.ttf": "39dff657dd43bfb7ab7e25406d4baab7",
"assets/packages/yaru/src/text/fonts/Ubuntu-B.ttf": "c33c9da914508707cc7d4453239176a5",
"assets/packages/yaru/src/text/fonts/Ubuntu-BI.ttf": "9eac57f171903e63575285b864a03ac8",
"assets/packages/yaru/src/text/fonts/Ubuntu-L.ttf": "8752cc329a4ba278de1fbe87848f64f0",
"assets/packages/yaru/src/text/fonts/Ubuntu-LI.ttf": "dff2c7f7e103ee2516e9c993b62453f3",
"assets/packages/yaru/src/text/fonts/Ubuntu-M.ttf": "d22dd270cff85396469ca949121abc10",
"assets/packages/yaru/src/text/fonts/Ubuntu-MI.ttf": "e8d536491885e9c071e3ee4803d951d2",
"assets/packages/yaru/src/text/fonts/Ubuntu-R.ttf": "29b1464e2d39f94775515968be952cb4",
"assets/packages/yaru/src/text/fonts/Ubuntu-RI.ttf": "6f1f6aa0bc3920f8eccbe06fdc883ada",
"assets/packages/yaru_icons/assets/yaru_icons.otf": "8db5a3bc0282c578c7fd8f9e8655292f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"gis.jpeg": "568c9ba32a2ed5c01a0c2599b1e6235b",
"icons/Icon-192.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"icons/Icon-512.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"icons/Icon-maskable-192.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"icons/Icon-maskable-512.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"index.html": "3145c47fb4017b29d9c03aae0fcb3d0c",
"/": "3145c47fb4017b29d9c03aae0fcb3d0c",
"main.dart.js": "057da540b7ca847d8f7751fbf1185de5",
"manifest.json": "7e36566359edc4a1f6237f51494d2cd0",
"styles.css": "0fc78698cd33995a37a734a7b22839a1",
"version.json": "ea4397f2cf58f05e8a5bc39f8166acbb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
