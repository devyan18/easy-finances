// import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
// import { Navbar } from "@/components";

// function App() {
//   const {
//     isOpen: isOpenFixed,
//     onOpen: OnOpenFixed,
//     onOpenChange: onOpenChangeFixed,
//   } = useDisclosure();
//   const {
//     isOpen: isOpenVariable,
//     onOpen: OnOpenVariable,
//     onOpenChange: onOpenChangeVariable,
//   } = useDisclosure();
//   return (
//     <>
//       <Navbar />
//       <div className="flex">
//         <h1>Hola mundo</h1>
//         <Button onPress={OnOpenFixed}>Create Fixed Cost</Button>
//         <Modal
//           size="md"
//           className="bg-blend-darken text-white rounded-2xl"
//           // height="auto"
//           backdrop="blur"
//           isOpen={isOpenFixed}
//           onOpenChange={onOpenChangeFixed}
//           isDismissable={false}
//         >
//           <ModalContent className="m-0 p-0">
//             {(onClose) => <CreateFixedCost onClose={onClose} />}
//           </ModalContent>
//         </Modal>

//         <Button onPress={OnOpenVariable}>Create Variable Cost</Button>
//         <Modal
//           size="md"
//           className="bg-blend-darken text-white rounded-2xl"
//           // height="auto"
//           backdrop="blur"
//           isOpen={isOpenVariable}
//           onOpenChange={onOpenChangeVariable}
//           isDismissable={false}
//         >
//           <ModalContent className="m-0 p-0">
//             {(onClose) => <CreateVariableCost onClose={onClose} />}
//           </ModalContent>
//         </Modal>
//       </div>
//     </>
//   );
// }

// export default App;
