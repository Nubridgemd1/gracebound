/* Gracebound Health Services — shared data + storage (per-device demo persistence) */
(function(){
  "use strict";

  var DEFAULT_CONTACT = {
    phone:"(201) 349-3486", tel:"+12013493486",
    email:"graceboundhealthservices@gmail.com",
    addr1:"3947 Woodland Phlox Drive", addr2:"Katy, Texas 77493",
    area:"Katy, TX &amp; surrounding communities",
    hours:"Care available 24/7 · office phone daily 8am–7pm"
  };

  var DEFAULT_CONTENT = {
    heroTitle:'Caring support that <span class="hl">comes to you</span>, right at home.',
    heroSub:"Gracebound Health Services provides warm, non-medical personal assistance in the comfort of your own home — from help with daily routines to friendly companionship. No facility to move into. Our vetted caregivers come to your residence.",
    services:[
      {t:"Personal care", d:"Respectful help with bathing, grooming, dressing, toileting and everyday hygiene."},
      {t:"Companionship", d:"Friendly conversation, activities, hobbies and outings — and a caring, watchful presence."},
      {t:"Homemaking", d:"Light housekeeping, laundry, tidying and keeping the home safe and comfortable."},
      {t:"Meal preparation", d:"Nutritious, tailored meals, grocery help and gentle assistance at mealtimes."},
      {t:"Medication reminders", d:"Timely, non-medical reminders to help keep routines on track (we do not administer medication)."},
      {t:"Errands & transportation", d:"Rides to appointments, shopping, pharmacy pickups and getting out and about."},
      {t:"Mobility & transfers", d:"Safe support with walking, transfers and fall-prevention around the home."},
      {t:"Respite care", d:"Trusted, temporary relief so family caregivers can rest, travel or take time for themselves."}
    ]
  };

  var DEFAULT_FLYERS = [
    { id:"f-comes-to-you", accent:"purple", tag:"In-home care", title:"Care that comes to you", subtitle:"Non-medical personal assistance at home", body:"No facility to move into. Our vetted, compassionate caregivers come to your residence — a few hours a week or around the clock.", cta:"Call (201) 349-3486" },
    { id:"f-free-consult", accent:"coral", tag:"Free consultation", title:"Start with a free in-home visit", subtitle:"No obligation — a plan built around you", body:"We visit your home, listen to your needs, and design a personalized care plan. You choose what works for your family.", cta:"Book your free visit" },
    { id:"f-companionship", accent:"plum", tag:"Companionship", title:"No one should feel alone", subtitle:"Friendly company & connection", body:"Conversation, favorite activities, walks and a caring, watchful presence — companionship that brightens every day.", cta:"Request companionship care" },
    { id:"f-respite", accent:"teal", tag:"Respite care", title:"Family caregivers deserve rest", subtitle:"Trusted relief when you need it", body:"Take time to recharge, travel or simply breathe. We'll care for your loved one with warmth while you're away.", cta:"Ask about respite care" },
    { id:"f-247", accent:"purple", tag:"24/7 & overnight", title:"Around-the-clock peace of mind", subtitle:"Overnight & live-in style support", body:"From overnight stays to continuous 24-hour care at home — dependable support and safety, day and night.", cta:"Call (201) 349-3486" },
    { id:"f-personal-care", accent:"gold", tag:"Personal care", title:"Dignity in every detail", subtitle:"Gentle help with daily living", body:"Respectful assistance with bathing, dressing, grooming and mobility — always centered on comfort and dignity.", cta:"Learn about personal care" },
    { id:"f-homemaking", accent:"teal", tag:"Homemaking & meals", title:"A clean home, a warm meal", subtitle:"Everyday help that lightens the load", body:"Light housekeeping, laundry, tidying and nutritious home-cooked meals — a safe, comfortable home to enjoy.", cta:"Request home help" },
    { id:"f-errands", accent:"coral", tag:"Errands & rides", title:"Getting out & about, safely", subtitle:"Transportation & errands", body:"Rides to appointments, grocery runs, pharmacy pickups and outings — we help you stay connected to your community.", cta:"Schedule a ride" },
    { id:"f-hiring", accent:"plum", tag:"We're hiring", title:"Become a Gracebound caregiver", subtitle:"Compassionate people wanted", body:"Meaningful work, flexible hours and a team that cares. If you love helping others, we'd love to meet you.", cta:"Apply today" },
    { id:"f-safe-home", accent:"gold", tag:"Aging at home", title:"Stay safe in the home you love", subtitle:"Support for independent living", body:"Fall-prevention, daily routines and a helping hand — so seniors can keep living comfortably and independently at home.", cta:"Call (201) 349-3486" }
  ];

  var DEFAULT_CRED = { user:"admin", pass:"gracebound2026" };

  function read(k, fb){ try{ var v=localStorage.getItem(k); return v?JSON.parse(v):fb; }catch(e){ return fb; } }
  function write(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); return true; }catch(e){ return false; } }

  window.GB = {
    DEFAULT_CONTACT: DEFAULT_CONTACT,
    DEFAULT_CONTENT: DEFAULT_CONTENT,
    DEFAULT_FLYERS: DEFAULT_FLYERS,
    getContact:  function(){ return Object.assign({}, DEFAULT_CONTACT, read("gb-contact", {})); },
    saveContact: function(c){ return write("gb-contact", c); },
    getContent:  function(){ var c=read("gb-content", {}); return { heroTitle:c.heroTitle||DEFAULT_CONTENT.heroTitle, heroSub:c.heroSub||DEFAULT_CONTENT.heroSub, services:(c.services&&c.services.length?c.services:DEFAULT_CONTENT.services) }; },
    saveContent: function(c){ return write("gb-content", c); },
    getFlyers:   function(){ return read("gb-flyers", DEFAULT_FLYERS.slice()); },
    saveFlyers:  function(f){ return write("gb-flyers", f); },
    getCred:     function(){ return Object.assign({}, DEFAULT_CRED, read("gb-cred", {})); },
    saveCred:    function(c){ return write("gb-cred", c); },
    resetAll:    function(){ ["gb-contact","gb-content","gb-flyers"].forEach(function(k){ try{localStorage.removeItem(k);}catch(e){} }); },
    accentHex: {
      purple:{a:"#4b3f86",b:"#2f2760"}, coral:{a:"#ef7f57",b:"#c2482a"}, plum:{a:"#6a5c8f",b:"#41355f"},
      teal:{a:"#2f7d7a",b:"#1c4f4d"}, gold:{a:"#d8a24a",b:"#a9741f"}, rose:{a:"#c65f7b",b:"#8f3a52"}
    }
  };
})();
