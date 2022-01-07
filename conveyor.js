input = ["a", "b"];
let randomInput = input[Math.floor(Math.random() * input.length)];

async function createNewComponent() {
  let item = {
    step: -1,
    status: randomInput,
  };

  // move item down conveyor belt, pausing 200ms between steps
  var moveItemAlongConveyorBelt = async function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        item = conveyorBeltStep(item);
        //randomInput = input[Math.floor(Math.random() * input.length)];
        resolve();
      }, 200);
    });
  };

  while (item.step < 6) {
    await moveItemAlongConveyorBelt();
  }

  return item;
}

function conveyorBeltStep(itemToProcess) {
  const newItemToProcess = Object.assign({}, itemToProcess);
  newItemToProcess.step += 1;
  function randomiseInput() {
    randomInput = input[Math.floor(Math.random() * input.length)];
    return randomInput;
  }

  switch (newItemToProcess.step) {
    case 0:
      // newItemToProcess.status = "";
      randomiseInput();
      console.log(randomInput);
      break;
    case 1:
      newItemToProcess.status += randomInput + " <1";
      break;
    case 2:
      newItemToProcess.status += " <2";

      break;
    case 3:
      console.log(randomInput);
      newItemToProcess.status += " <3";
      break;
    case 4:
      newItemToProcess.status += " <4";
      break;
    case 5:
      newItemToProcess.status += " <5";
      break;
    case 6:
      newItemToProcess.status += " <6";
      break;
  }

  console.log(newItemToProcess.status);
  return newItemToProcess;
}

createNewComponent();
