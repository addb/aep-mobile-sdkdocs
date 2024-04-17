"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9909,5271],{62843:function(e,r,n){n.r(r),n.d(r,{_frontmatter:function(){return m},default:function(){return u}});var a=n(87462),t=n(63366),i=(n(15007),n(64983)),o=n(91515),s=n(41735),d=["components"],m={},l=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",r)}},c=l("TabsBlock"),p=l("InlineAlert"),g={_frontmatter:m},v=o.Z;function u(e){var r=e.components,n=(0,t.Z)(e,d);return(0,i.mdx)(v,(0,a.Z)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"platform-services"},"Platform Services"),(0,i.mdx)("p",null,"The Platform Services are provided by the Adobe Experience Platform Mobile SDKs as part of the Mobile Core extension. These services provide shared functionality throughout the SDK that can be shared by extensions. For example, services provide shared functionality for networking, data queuing, and caching. For more information on services provided by the SDK please see the documentation in our ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-core-ios/blob/main/Documentation/Services/README.md"},"iOS")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-core-ios/tree/main/Documentation/Services"},"Android")," repositories."),(0,i.mdx)("h2",{id:"accessing-services"},"Accessing services"),(0,i.mdx)("p",null,"The MobileCore extension provides a shared ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceProvider"),", responsible for maintaining the current set of provided services and any potential service overrides."),(0,i.mdx)("p",null,"Some services provide wrapper classes. For example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Log")," class is a wrapper around the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LoggingService"),". However, in some cases, a wrapper class may not exist, and you may need to access a service directly from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceProvider"),". The recommended way to do this is through a computed variable or directly through the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceProvider")," when required. This ensures that if the service is overridden, the service consumer always uses the correct service implementation."),(0,i.mdx)("p",null,"For example, the following code snippet shows how to access ",(0,i.mdx)("inlineCode",{parentName:"p"},"CacheService"),"."),(0,i.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(s.default,{query:"platform=android&task=access",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(s.default,{query:"platform=ios&task=access",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"overriding-services"},"Overriding services"),(0,i.mdx)("p",null,"The SDK allows overriding some services with your custom implemetation. This section walks through the steps necessary to create a custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"Logging")," service, and register it with the SDK."),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Use caution when overriding services. Changes to behavior for a given service can have unintended consequences throughout the SDK."),(0,i.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(s.default,{query:"platform=android&task=override",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(s.default,{query:"platform=ios&task=override",mdxType:"Tabs"}))}u.isMDXComponent=!0},41735:function(e,r,n){n.r(r),n.d(r,{_frontmatter:function(){return m},default:function(){return g}});var a,t=n(87462),i=n(63366),o=(n(15007),n(64983)),s=n(91515),d=["components"],m={},l=(a="Variant",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),c={_frontmatter:m},p=s.Z;function g(e){var r=e.components,n=(0,i.Z)(e,d);return(0,o.mdx)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)(l,{platform:"android",task:"access",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"CacheService cacheService = ServiceProvider.getInstance().getCacheService();\n")),(0,o.mdx)(l,{platform:"ios",task:"access",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"private var cacheService: Caching { return ServiceProvider.shared.cacheService }\n")),(0,o.mdx)(l,{platform:"android",task:"override",repeat:"7",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-1"},"Java"),(0,o.mdx)("p",null,"First, implement a class that conforms to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Logging")," interface. Below is an example of a logging service that only prints out messages with a log level of Error."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'class ErrorLogger implements Logging {\n @Override\n public void trace(String tag, String message) {}\n\n @Override\n public void debug(String tag, String message) {}\n\n @Override\n public void warning(String tag, String message) {}\n\n @Override\n public void error(String tag, String message) {\n  Log.e("ErrorLogger", message);\n }\n}\n')),(0,o.mdx)("p",null,"Next, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setLoggingService")," API of ",(0,o.mdx)("inlineCode",{parentName:"p"},"ServiceProvider")," to update the logging service used by the SDK."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"ServiceProvider.getInstance().setLoggingService(new ErrorLogger());\n")),(0,o.mdx)("p",null,"To revert to the default implementation of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LoggingService"),", you can set the logging service to nil using ",(0,o.mdx)("inlineCode",{parentName:"p"},"setLoggingService")," API."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"ServiceProvider.getInstance().setLoggingService(null);\n")),(0,o.mdx)(l,{platform:"ios",task:"override",repeat:"7",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-1"},"Swift"),(0,o.mdx)("p",null,"First, implement a type that conforms to the Logging protocol, as defined above.  Below is an example of a logging service that only prints out messages with a log level of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Error"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'class ErrorLogger: Logging {\n  func log(level: LogLevel, label: String, message: String) {\n    guard level == .error else { return }\n    print("\\(label): \\(message)")\n  }\n}\n')),(0,o.mdx)("p",null,"Next, set the ",(0,o.mdx)("inlineCode",{parentName:"p"},"loggingService")," on the shared ",(0,o.mdx)("inlineCode",{parentName:"p"},"ServiceProvider")," used by the SDK."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"ServiceProvider.shared.loggingService = ErrorLogger()\n")),(0,o.mdx)("p",null,"To revert to the default implementation of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LoggingService"),", you can set the loggingService to nil."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"ServiceProvider.shared.loggingService = nil\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-platform-services-index-md-033be1b6d45deff1861b.js.map