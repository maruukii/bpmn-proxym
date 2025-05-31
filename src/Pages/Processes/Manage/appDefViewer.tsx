// export default function AppDefinitionViewer(app: AppDefViewer) {
//   return (
//     <div className="p-6 bg-white text-gray-800">
//       {/* Title */}
//       <h2 className="text-2xl font-semibold mb-6">
//         Détails de la définition d'App: {app?.name}
//       </h2>

//       {/* Preview Section */}
//       <div className="border p-4 bg-gray-50 mb-8">
//         <div className="text-sm uppercase text-center text-gray-400 mb-2">
//           PRÉVISUALISER
//         </div>
//         <div className="w-64 h-36 bg-[#269ABC] flex items-start justify-start text-white font-semibold p-2 relative overflow-hidden">
//           {app?.name}
//           <svg
//             className="absolute right-2 bottom-2 w-12 h-12 text-[#1c7fa4]"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path
//               fillRule="evenodd"
//               d="M11.983 1.466a1 1 0 011.034.42l1.717 2.575a6.967 6.967 0 011.734.715l3.046-.508a1 1 0 011.13.994v3.254a7.027 7.027 0 01.051.882l2.468 1.42a1 1 0 01.223 1.547l-2.345 2.34c.064.424.095.855.095 1.29 0 .435-.031.866-.095 1.29l2.345 2.34a1 1 0 01-.223 1.548l-2.468 1.418a7.03 7.03 0 01-.05.883v3.254a1 1 0 01-1.13.993l-3.046-.508a6.97 6.97 0 01-1.734.716l-1.717 2.574a1 1 0 01-1.73 0l-1.717-2.574a6.971 6.971 0 01-1.734-.716l-3.045.508a1 1 0 01-1.131-.993v-3.254a6.971 6.971 0 01-.05-.883l-2.468-1.418a1 1 0 01-.223-1.548l2.345-2.34A6.946 6.946 0 013 10c0-.435.031-.866.095-1.29L.75 6.37a1 1 0 01.223-1.547l2.468-1.42a6.968 6.968 0 01.05-.882V.268a1 1 0 011.13-.994l3.045.508c.552-.288 1.14-.528 1.734-.716L10.95 1.886a1 1 0 011.033-.42z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Models Section */}
//       <h3 className="text-xl font-semibold mb-4">
//         Modèles inclus dans la définition d'App
//       </h3>
//       <div className="flex gap-4 mb-2">
//         <button className="px-4 py-2 bg-white border-b-2 border-black font-semibold">
//           BPMN models
//         </button>
//         <button className="px-4 py-2 text-gray-400">CMMN models</button>
//       </div>

//       {/* Model Thumbnail */}
//       <div className="w-64 border bg-gray-100">
//         <div className="bg-white p-2 border-b text-xs text-gray-500">v6</div>
//         <div className="h-24 flex items-center justify-center">
//           <img
//             src={app?.thumbnail || "/thumbnail-placeholder.png"}
//             alt="model preview"
//             className="h-16 object-contain"
//           />
//         </div>
//         <div className="p-2 text-sm font-medium text-gray-700">
//           {app?.modelName || "process-123"}
//         </div>
//       </div>
//     </div>
//   );
// }
