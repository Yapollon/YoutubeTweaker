globalThis.TweakerSettings = [
  {
    "group": "Home & navigation",
    "key": "hideHomeFeed",
    "label": "Home feed",
    "description": "Keep search and subscriptions available.",
    "selector": "ytd-browse[page-subtype=\"home\"] #contents"
  },
  {
    "group": "Home & navigation",
    "key": "hideShorts",
    "label": "Shorts",
    "description": "Hide Shorts shelves, links and search results.",
    "selector": "ytd-reel-shelf-renderer, ytd-rich-shelf-renderer[is-shorts], ytd-reel-item-renderer, ytd-shorts, a[href=\"/shorts\"], ytd-guide-entry-renderer:has(a[href^=\"/shorts\"]), ytd-mini-guide-entry-renderer:has(a[href^=\"/shorts\"]), ytd-rich-item-renderer:has(a[href^=\"/shorts/\"])"
  },
  {
    "group": "Home & navigation",
    "key": "hideMixes",
    "label": "Mixes",
    "description": "Hide automatically generated mix cards.",
    "selector": "ytd-rich-item-renderer:has(a[href*=\"start_radio=1\"]), ytd-video-renderer:has(a[href*=\"start_radio=1\"]), ytd-compact-radio-renderer, ytd-radio-renderer"
  },
  {
    "group": "Home & navigation",
    "key": "hideExplore",
    "label": "Explore & trending",
    "description": "Remove discovery links from navigation.",
    "selector": "ytd-guide-entry-renderer:has(a[href^=\"/feed/trending\"]), ytd-guide-section-renderer:has(a[href^=\"/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ\"]), ytd-guide-entry-renderer:has(a[href^=\"/feed/explore\"])"
  },
  {
    "group": "Home & navigation",
    "key": "hideMore",
    "label": "More from YouTube",
    "description": "Hide the additional YouTube services section.",
    "selector": "ytd-guide-section-renderer:has(a[href*=\"youtube.com/premium\"])"
  },
  {
    "group": "Home & navigation",
    "key": "hideSubscriptions",
    "label": "Subscriptions",
    "description": "Hide subscription navigation links.",
    "selector": "ytd-guide-entry-renderer:has(a[href=\"/feed/subscriptions\"]), ytd-mini-guide-entry-renderer:has(a[href=\"/feed/subscriptions\"])"
  },
  {
    "group": "Video page",
    "key": "hideSidebar",
    "label": "Entire video sidebar",
    "description": "Overrides the individual sidebar controls below.",
    "selector": "ytd-watch-flexy #secondary"
  },
  {
    "group": "Video page",
    "key": "hideRecommended",
    "label": "Recommended videos",
    "description": "Hide recommendations alongside a video.",
    "selector": "ytd-watch-next-secondary-results-renderer, ytd-watch-flexy #related"
  },
  {
    "group": "Video page",
    "key": "hideChat",
    "label": "Live chat",
    "description": "Hide the live chat panel.",
    "selector": "ytd-live-chat-frame, #chat-container"
  },
  {
    "group": "Video page",
    "key": "hidePlaylist",
    "label": "Playlist panel",
    "description": "Hide the playlist beside the player.",
    "selector": "ytd-watch-flexy ytd-playlist-panel-renderer"
  },
  {
    "group": "Video page",
    "key": "hideFundraiser",
    "label": "Fundraisers",
    "description": "Hide fundraising panels.",
    "selector": "ytd-donation-shelf-renderer, ytd-donation-unavailable-renderer"
  },
  {
    "group": "Video page",
    "key": "hideComments",
    "label": "Comments",
    "description": "Hide the comments section.",
    "selector": "ytd-comments"
  },
  {
    "group": "Video page",
    "key": "hideMerch",
    "label": "Merch, tickets & offers",
    "description": "Hide shopping and ticket promotions.",
    "selector": "ytd-merch-shelf-renderer, ytd-ticket-shelf-renderer, ytd-offer-module-renderer, ytd-shopping-carousel-renderer, ytd-product-shelf-renderer"
  },
  {
    "group": "Video page",
    "key": "hideInfo",
    "label": "Video information",
    "description": "Hide title, channel details and description.",
    "selector": "ytd-watch-flexy #above-the-fold, ytd-watch-flexy #info, ytd-watch-flexy #meta"
  },
  {
    "group": "Player",
    "key": "hideEndFeed",
    "label": "End screen suggestions",
    "description": "Hide the suggested video grid when playback ends.",
    "selector": ".html5-endscreen, .ytp-endscreen-content"
  },
  {
    "group": "Player",
    "key": "hideEndCards",
    "label": "End screen cards",
    "description": "Hide creator end screen overlays.",
    "selector": ".ytp-ce-element"
  },
  {
    "group": "Player",
    "key": "disableAutoplay",
    "label": "Disable autoplay",
    "description": "Turn off the next-video autoplay switch.",
    "selector": null
  },
  {
    "group": "Player",
    "key": "disableAnnotations",
    "label": "Disable annotations",
    "description": "Hide annotation and information card overlays.",
    "selector": ".annotation, .ytp-cards-teaser, .ytp-cards-button, .ytp-cards-title, .ytp-cards-content"
  },
  {
    "group": "Header & search",
    "key": "hideHeader",
    "label": "Top header",
    "description": "Hide YouTube\u2019s top navigation bar.",
    "selector": "ytd-masthead, #masthead-container"
  },
  {
    "group": "Header & search",
    "key": "hideNotifications",
    "label": "Notifications",
    "description": "Hide the notification bell.",
    "selector": "ytd-notification-topbar-button-renderer"
  },
  {
    "group": "Header & search",
    "key": "hideInaptResults",
    "label": "Distracting search results",
    "description": "Hide related searches, recommendations and promotional result shelves.",
    "selector": "ytd-search ytd-shelf-renderer, ytd-search ytd-horizontal-card-list-renderer, ytd-search ytd-promoted-sparkles-web-renderer, ytd-search ytd-ad-slot-renderer"
  }
];
