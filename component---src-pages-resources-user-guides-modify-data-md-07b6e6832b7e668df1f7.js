"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5758],{1312:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return b}});var n,i=a(87462),o=a(63366),d=(a(15007),a(64983)),s=a(91515),l=["components"],r={},m=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),p={_frontmatter:r},c=s.Z;function b(e){var t=e.components,a=(0,o.Z)(e,l);return(0,d.mdx)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"modify-data-in-sdk-events"},"Modify data in SDK events"),(0,d.mdx)("p",null,"The modify data rule action is supported in ",(0,d.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/index.md"},"Mobile Core")," starting from version 2.1.14 (Launch), version 2.7.0 (iOS), and 1.5.5 (Android). This action is powerful, complex, and enables advanced use cases."),(0,d.mdx)("p",null,"To use this action, you need to learn how events flow in the Adobe Experience Platform Mobile SDK and how they interact with the ",(0,d.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/rules-engine/index.md"},"rules engine"),"."),(0,d.mdx)("h2",{id:"context"},"Context"),(0,d.mdx)("h3",{id:"what-are-sdk-events"},"What are SDK events?"),(0,d.mdx)("p",null,"In the Experience Platform Mobile SDK, events hold all the data that is required by other extensions to complete the necessary actions. Events have the following properties:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Describes the event. Examples include Adobe Analytics, Adobe Target, and Adobe Lifecycle.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Source"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Indicates the cause of or directionality of the event. For example, a request or a response.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Event data"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Additional data is required to define the event. For example, context data on an Analytics event.")))),(0,d.mdx)("p",null,"Extensions that register with ",(0,d.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/index.md"},"Mobile Core")," will also register event listeners. A listener is defined by a combination of event type and source. When the SDK event hub processes an event, it notifies all listeners that match the provided combination."),(0,d.mdx)("h3",{id:"how-are-events-created-in-the-sdk"},"How are events created in the SDK?"),(0,d.mdx)("p",null,"Events are created by an extension and are dispatched to the SDK Event Hub. Each published rule that is created in the Data Collection UI is evaluated against the current event. Finally, the event is passed to each of the listeners for events with this type / source combination."),(0,d.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Events are created and dispatched when an SDK public API is invoked. Attach data action use cases are meant to act on these types of events."),(0,d.mdx)("h3",{id:"what-is-the-rules-engine"},"What is the Rules Engine?"),(0,d.mdx)("p",null,"The Rules Engine lives in the SDK Event Hub. Before listeners are notified, the Rules Engine evaluates each tag rule against the triggering event. A rule is defined by the following properties:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Event"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Trigger for the rule.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Condition"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Definition of the criteria to compare against the triggering event.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Action"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The resulting action if the evaluation of the rule is positive.")))),(0,d.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"A rule might be read out in the following way: If the SDK ",(0,d.mdx)("strong",{parentName:"p"},"Event")," occurs and ",(0,d.mdx)("strong",{parentName:"p"},"Condition(s)")," are met, then perform the ",(0,d.mdx)("strong",{parentName:"p"},"Action(s)"),"."),(0,d.mdx)("h2",{id:"using-the-modify-data-action"},"Using the modify data action"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Modify Data")," is a type of Rule Action that allows you to add, change, or remove event data to an SDK event. The modification of data happens in the Rules Engine before event listeners are notified of the event."),(0,d.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Modify data rule actions may modify or remove data from the triggering event.",(0,d.mdx)("br",null),(0,d.mdx)("br",null),"If there is a conflict between the data that is defined in your rule and the data in the event, the data in the event will be overwritten."),(0,d.mdx)("h3",{id:"defining-a-payload-for-the-modify-data-action"},"Defining a payload for the modify data action"),(0,d.mdx)("p",null,"When defining a payload for the modify data action, the payload must match the format of the triggering event. For example, if you want to modify context data in an Adobe Analytics event, you need to know where the context data is defined on that event and match the format in your rule."),(0,d.mdx)("p",null,"For this reason, it is highly recommended that you use the ",(0,d.mdx)("strong",{parentName:"p"},"Template")," if it is available. If not, please enable verbose logging in the SDK and carefully study the format of the event to which you will modify the data. If the format does not match, most likely the expected results will not be received."),(0,d.mdx)("h2",{id:"example---modifying-data-in-analytics-event"},"Example - Modifying data in Analytics event"),(0,d.mdx)("p",null,"The following sample shows how to modify data to all outgoing ",(0,d.mdx)("inlineCode",{parentName:"p"},"TrackAction")," Adobe Analytics network requests. To create this type of rule, select your property in the Data Collection UI and complete the following steps:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("a",{parentName:"li",href:"#create-a-rule"},"Create a new rule")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("a",{parentName:"li",href:"#select-an-event"},"Select the event you want to trigger the rule")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("a",{parentName:"li",href:"#define-the-action-using-freeform-json"},"Select the action to modify data and define your payload")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("a",{parentName:"li",href:"#save-the-rule-and-rebuild-your-property"},"Save and rebuild the property"))),(0,d.mdx)("h3",{id:"create-a-rule"},"Create a rule"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"On the ",(0,d.mdx)("strong",{parentName:"li"},"Rules")," tab, select ",(0,d.mdx)("strong",{parentName:"li"},"Create New Rule"),".")),(0,d.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"If you do not have existing rules for this property, the ",(0,d.mdx)("strong",{parentName:"p"},"Create New Rule")," button will be in the middle of the screen. If your property has rules, the button will be in the top right of the screen."),(0,d.mdx)("h3",{id:"select-an-event"},"Select an event"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Give your rule an easily recognizable name in your list of rules."),(0,d.mdx)("p",{parentName:"li"},'In this example, the rule is named "Modify Analytics Track Action Events".')),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Under the ",(0,d.mdx)("strong",{parentName:"p"},"Events")," section, select ",(0,d.mdx)("strong",{parentName:"p"},"Add"),".")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"From the ",(0,d.mdx)("strong",{parentName:"p"},"Extension")," dropdown list, select ",(0,d.mdx)("strong",{parentName:"p"},"Mobile Core"),".")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"From the ",(0,d.mdx)("strong",{parentName:"p"},"Event Type")," dropdown list, select ",(0,d.mdx)("strong",{parentName:"p"},"Track Action"),".")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Select ",(0,d.mdx)("strong",{parentName:"p"},"Keep Changes"),"."))),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/5530d/set-event.webp 320w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/0c8fb/set-event.webp 640w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/94b1e/set-event.webp 1280w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/0b34d/set-event.webp 1920w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/ca1bd/set-event.webp 2132w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/dd4a7/set-event.png 320w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/0f09e/set-event.png 640w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/bbbf7/set-event.png 1280w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/ac7a9/set-event.png 1920w","/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/d0fcb/set-event.png 2132w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/fb8ef8c674819ace058337e77c877680/bbbf7/set-event.png",alt:"set event",title:"set event",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("h3",{id:"define-the-action-using-template"},"Define the action using Template"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Under the ",(0,d.mdx)("strong",{parentName:"li"},"Actions")," section, select ",(0,d.mdx)("strong",{parentName:"li"},"Add"),"."),(0,d.mdx)("li",{parentName:"ol"},"From the ",(0,d.mdx)("strong",{parentName:"li"},"Extension")," dropdown list, select ",(0,d.mdx)("strong",{parentName:"li"},"Mobile Core"),"."),(0,d.mdx)("li",{parentName:"ol"},"From the ",(0,d.mdx)("strong",{parentName:"li"},"Action Type")," dropdown list, select ",(0,d.mdx)("strong",{parentName:"li"},"Modify Data"),"."),(0,d.mdx)("li",{parentName:"ol"},"On the right pane, in the ",(0,d.mdx)("strong",{parentName:"li"},"Context Data")," area, select the ",(0,d.mdx)("strong",{parentName:"li"},"Add")," button to insert a new key-value pair. Additional key-value pairs can be added by selecting the Add button for each key-value pair."),(0,d.mdx)("li",{parentName:"ol"},"Select the ",(0,d.mdx)("strong",{parentName:"li"},"Value Type")," for the value as String, Number, Boolean or Null. If the value type is selected as Null, the key will be removed from the triggering analytics event."),(0,d.mdx)("li",{parentName:"ol"},"Enter the key and value that needs to be modified in the triggering analytics event."),(0,d.mdx)("li",{parentName:"ol"},"Select ",(0,d.mdx)("strong",{parentName:"li"},"Keep Changes"),".")),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/5530d/set-action-analytics.webp 320w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/0c8fb/set-action-analytics.webp 640w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/94b1e/set-action-analytics.webp 1280w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/0b34d/set-action-analytics.webp 1920w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/51b42/set-action-analytics.webp 2178w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/dd4a7/set-action-analytics.png 320w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/0f09e/set-action-analytics.png 640w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/bbbf7/set-action-analytics.png 1280w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/ac7a9/set-action-analytics.png 1920w","/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/5f4ca/set-action-analytics.png 2178w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/b646e3454ed0ee177d49a6b0c8e05f97/bbbf7/set-action-analytics.png",alt:"set action analytics",title:"set action analytics",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("h3",{id:"define-the-action-using-freeform-json"},"Define the action using Freeform JSON"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Under the ",(0,d.mdx)("strong",{parentName:"li"},"Actions")," section, click ",(0,d.mdx)("strong",{parentName:"li"},"Add"),"."),(0,d.mdx)("li",{parentName:"ol"},"From the ",(0,d.mdx)("strong",{parentName:"li"},"Extension")," dropdown list, select ",(0,d.mdx)("strong",{parentName:"li"},"Mobile Core"),"."),(0,d.mdx)("li",{parentName:"ol"},"From the ",(0,d.mdx)("strong",{parentName:"li"},"Action Type")," dropdown list, select ",(0,d.mdx)("strong",{parentName:"li"},"Modify Data"),"."),(0,d.mdx)("li",{parentName:"ol"},"On the right pane, from the ",(0,d.mdx)("strong",{parentName:"li"},"Choose a Template")," dropdown list, select ",(0,d.mdx)("strong",{parentName:"li"},"JSON"),"."),(0,d.mdx)("li",{parentName:"ol"},"In the ",(0,d.mdx)("strong",{parentName:"li"},"JSON Payload")," field, type the json data that will modify this event data."),(0,d.mdx)("li",{parentName:"ol"},"Select ",(0,d.mdx)("strong",{parentName:"li"},"Keep Changes"),".")),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/5530d/set-action-json.webp 320w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/0c8fb/set-action-json.webp 640w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/94b1e/set-action-json.webp 1280w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/0b34d/set-action-json.webp 1920w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/b6de4/set-action-json.webp 2182w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/dd4a7/set-action-json.png 320w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/0f09e/set-action-json.png 640w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/bbbf7/set-action-json.png 1280w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/ac7a9/set-action-json.png 1920w","/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/38915/set-action-json.png 2182w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/00922d53ce65a80a2ce95bc5c8f8b106/bbbf7/set-action-json.png",alt:"set action json",title:"set action json",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,"On the right pane, you can add a payload that modifies data of an SDK event before an extension that is listening for this event can hear the event. In this example, context data of this event is modified before the Analytics extension processes it. The added context data will now be on the outgoing Analytics hit."),(0,d.mdx)("p",null,"In the following example, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"launches")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"anAddedKey")," keys are modified and the ",(0,d.mdx)("inlineCode",{parentName:"p"},"aRemovedKey")," key is removed in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"contextdata")," of the Adobe Analytics event. Values for the new keys can either be hardcoded in the rule, or dynamically determined by the SDK when this event processes by using Data Elements."),(0,d.mdx)("h3",{id:"save-the-rule-and-rebuild-your-property"},"Save the rule and rebuild your property"),(0,d.mdx)("p",null,"After you complete your configuration, verify that your rule looks like the following:"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/5530d/rule-complete-modify-data.webp 320w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/0c8fb/rule-complete-modify-data.webp 640w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/94b1e/rule-complete-modify-data.webp 1280w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/0b34d/rule-complete-modify-data.webp 1920w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/51b42/rule-complete-modify-data.webp 2178w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/dd4a7/rule-complete-modify-data.png 320w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/0f09e/rule-complete-modify-data.png 640w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/bbbf7/rule-complete-modify-data.png 1280w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/ac7a9/rule-complete-modify-data.png 1920w","/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/5f4ca/rule-complete-modify-data.png 2178w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/8764d5d2da42bc30332ed1fc25ec8912/bbbf7/rule-complete-modify-data.png",alt:"rule complete modify data",title:"rule complete modify data",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Select ",(0,d.mdx)("strong",{parentName:"li"},"Save")),(0,d.mdx)("li",{parentName:"ol"},"Rebuild your mobile property and deploy it to the correct Environment.")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-user-guides-modify-data-md-07b6e6832b7e668df1f7.js.map