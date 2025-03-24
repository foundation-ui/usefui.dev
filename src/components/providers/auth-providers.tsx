// "use client";

// import React from "react";
// import { ClerkProvider } from "@clerk/nextjs";
// import {
//   ColorModeContext,
//   GetTokenFromSource,
//   json_design_tokens,
// } from "@foundation-ui/tokens";
// import { generateAlpha } from "@foundation-ui/core";

// export function AuthProviders({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const { colorMode } = React.useContext(ColorModeContext);

//   const colors = () => {
//     if (colorMode === "dark") {
//       return {
//         body: {
//           name: "mono-dark",
//           base: {
//             hex: "#111315",
//             rgb: "rgb(17, 19, 21)",
//             hsl: "hsl(210, 10.526315789473683%, 7.450980392156863%)",
//           },
//           alpha: generateAlpha("#111315"),
//           tint: [],
//           shade: [],
//         },
//         font: {
//           name: "mono-white",
//           base: {
//             hex: "#f6f6f2",
//             rgb: "rgb(246, 246, 242)",
//             hsl: "hsl(60, 18.18181818181826%, 95.68627450980391%)",
//           },
//           alpha: generateAlpha("#f6f6f2"),
//           tint: [],
//           shade: [],
//         },
//       };
//     }

//     return {
//       body: {
//         name: "mono-white",
//         base: {
//           hex: "#f6f6f2",
//           rgb: "rgb(246, 246, 242)",
//           hsl: "hsl(60, 18.18181818181826%, 95.68627450980391%)",
//         },
//         alpha: generateAlpha("#f6f6f2"),
//         tint: [],
//         shade: [],
//       },
//       font: {
//         name: "mono-dark",
//         base: {
//           hex: "#111315",
//           rgb: "rgb(17, 19, 21)",
//           hsl: "hsl(210, 10.526315789473683%, 7.450980392156863%)",
//         },
//         alpha: generateAlpha("#111315"),
//         tint: [],
//         shade: [],
//       },
//     };
//   };

//   const borderRadius = `${
//     GetTokenFromSource({
//       source: json_design_tokens,
//       token_category: "measurement",
//       query: "medium",
//       unit: "px",
//     })?.base
//   }px`;

//   return (
//     <ClerkProvider
//       afterSignOutUrl={"/sign-up"}
//       appearance={{
//         layout: {
//           animations: false,
//         },
//         variables: {
//           borderRadius,
//           colorBackground: colors().body.base.hex,
//           colorInputBackground: colors().body.base.hex,
//           colorPrimary: `${colors().font.base.hex}60`,
//           colorTextSecondary: colors().font.base.hex,
//           colorTextOnPrimaryBackground: colors().body.base.hex,
//           colorInputText: colors().font.base.hex,
//           colorNeutral: colors().font.base.hex,
//           colorText: colors().font.base.hex,
//         },
//       }}
//     >
//       {children}
//     </ClerkProvider>
//   );
// }
