////////////////////////////////////////////////////////////////////
// GETTING WINDOW WIDTH FOR SETTING CANVAS
////////////////////////////////////////////////////////////////////
let totalWidth = document.getElementById("card-body-sketch").clientWidth;
console.log(totalWidth);

////////////////////////////////////////////////////////////////////
// GETTING BUTTON MENU SELECTION
////////////////////////////////////////////////////////////////////
let sortingAlgorithm = "";

$("#btnSelectionSort").on("click" , function(){
    console.log("CLICKED " + $(this).text());
    sortingAlgorithm = $(this).text();
})
$("#btnBubbleSort").on("click" , function(){
    console.log("CLICKED " + $(this).text());
    sortingAlgorithm = $(this).text();
})
$("#btnInsertionSort").on("click" , function(){
    console.log("CLICKED " + $(this).text());
    sortingAlgorithm = $(this).text();
})
$("#btnShellSort").on("click" , function(){
    console.log("CLICKED " + $(this).text());
    sortingAlgorithm = $(this).text();
})
$("#btnOddEvenSort").on("click" , function(){
    console.log("CLICKED " + $(this).text());
    sortingAlgorithm = $(this).text();
})
$("#btnCombSort").on("click" , function(){
    console.log("CLICKED " + $(this).text());
    sortingAlgorithm = $(this).text();
})
$("#btnCycleSort").on("click" , function(){
    console.log("CLICKED " + $(this).text());
    sortingAlgorithm = $(this).text();
})

////////////////////////////////////////////////////////////////////
//CREATING ARRAY
////////////////////////////////////////////////////////////////////
let values = [];
let i = 0;

///////////////////////////////
//SHELL SORT VARIABLE
///////////////////////////////
let gap;
let q;

/////////////////////////////
//ODD-EVEN SORT
/////////////////////////////
let isSorted = false;

////////////////////////////
//COMB SORT
///////////////////////////
let gap1;
let swapped = true;

///////////////////////////
//CYCLE SORT
//////////////////////////
let cycle_start = 0;


////////////////////////////////////////////////////////////////////
// FOR LOOP AND NOLOOP
////////////////////////////////////////////////////////////////////
let completed = false;

////////////////////////////////////////////////////////////////////
//SORTING ALGORITHM BUTTON PRESS
////////////////////////////////////////////////////////////////////
let selectionSortBtn = false;
let bubbleSortBtn = false;
let insertionSortBtn = false;
let shellSortBtn = false;
let oddEvenSortBtn = false;
let combSortBtn = false;
let cycleSortBtn = false;

////////////////////////////////////////////////////////////////////
//GENERATE FUNCTION
////////////////////////////////////////////////////////////////////
$("#btn-generate").click(function(){
  selectionSortBtn = false;
  bubbleSortBtn = false;
  insertionSortBtn = false;
  shellSortBtn = false;
  oddEvenSortBtn = false;
  combSortBtn = false;
  cycleSortBtn = false;
  frameRate(60);
  values = [];
  sortingAlgorithm = "";
  cycle_start = 0;
  generateValues();
})

////////////////////////////////////////////////////////////////////
//SORTING BUTTON
////////////////////////////////////////////////////////////////////
$("#btn-Sort").click(function(){
  if(sortingAlgorithm == "Selection Sort")
  {
    selectionSortBtn = true;
    bubbleSortBtn = false;
    insertionSortBtn = false;
    shellSortBtn = false;
    oddEvenSortBtn = false;
    combSortBtn = false;
    cycleSortBtn = false;
  }
  else if(sortingAlgorithm == "Insertion Sort")
  {
    selectionSortBtn = false;
    bubbleSortBtn = false;
    insertionSortBtn = true;
    shellSortBtn = false;
    oddEvenSortBtn = false;
    combSortBtn = false;
    cycleSortBtn = false;
  }
  else if(sortingAlgorithm == "Bubble Sort")
  {
    selectionSortBtn = false;
    insertionSortBtn = false;
    bubbleSortBtn = true;
    shellSortBtn = false;
    oddEvenSortBtn = false;
    combSortBtn = false;
    cycleSortBtn = false;
  }
  else if(sortingAlgorithm == "Shell Sort")
  {
    selectionSortBtn = false;
    insertionSortBtn = false;
    bubbleSortBtn = false;
    shellSortBtn = true;
    oddEvenSortBtn = false;
    combSortBtn = false;
    cycleSortBtn = false;
  }
  else if(sortingAlgorithm == "Odd Even Sort")
  {
    selectionSortBtn = false;
    insertionSortBtn = false;
    bubbleSortBtn = false;
    shellSortBtn = false;
    oddEvenSortBtn = true;
    combSortBtn = false;
    cycleSortBtn = false;
  }
  else if(sortingAlgorithm == "Comb Sort")
  {
    selectionSortBtn = false;
    insertionSortBtn = false;
    bubbleSortBtn = false;
    shellSortBtn = false;
    oddEvenSortBtn = false;
    combSortBtn = true;
    cycleSortBtn = false;
  }
  else if(sortingAlgorithm == "Cycle Sort")
  {
    selectionSortBtn = false;
    insertionSortBtn = false;
    bubbleSortBtn = false;
    shellSortBtn = false;
    oddEvenSortBtn = false;
    combSortBtn = false;
    cycleSortBtn = true;
  }
  else
  {
    $("#slct-algo").addClass("shake shake-horizontal shake-constant");
    setTimeout(function(){
      $("#slct-algo").removeClass("shake shake-horizontal shake-constant");
    },500);
  }

})

////////////////////////////////////////////////////////////////////
//CHANGE STATE OF THE BUTTONS
////////////////////////////////////////////////////////////////////
function changeState_btn()
{
  if(selectionSortBtn || insertionSortBtn || bubbleSortBtn || shellSortBtn || oddEvenSortBtn || combSortBtn || cycleSortBtn)
  {
    $("#btnSelectionSort").addClass("disabled");
    $("#btnBubbleSort").addClass("disabled");
    $("#btnInsertionSort").addClass("disabled");
    $("#btnShellSort").addClass("disabled");
    $("#btnOddEvenSort").addClass("disabled");
    $("#btnCombSort").addClass("disabled");
    $("#btnCycleSort").addClass("disabled");

    $("#btn-Sort").addClass("disabled");

    $("#btnSelectionSort").prop("disabled" , true);
    $("#btnBubbleSort").prop("disabled" , true);
    $("#btnInsertionSort").prop("disabled" , true);
    $("#btnShellSort").prop("disabled" , true);
    $("#btnOddEvenSort").prop("disabled" , true);
    $("#btnCombSort").prop("disabled" , true);
    $("#btnycleSort").prop("disabled" , true);

    $("#btn-Sort").prop("disabled" , true);
  }
  else
  {
    $("#btnSelectionSort").removeClass("disabled");
    $("#btnBubbleSort").removeClass("disabled");
    $("#btnInsertionSort").removeClass("disabled");
    $("#btnShellSort").removeClass("disabled");
    $("#btnOddEvenSort").removeClass("disabled");
    $("#btnCombSort").removeClass("disabled");
    $("#btnCycleSort").removeClass("disabled");

    $("#btn-Sort").removeClass("disabled");

    $("#btnSelectionSort").prop("disabled" , false);
    $("#btnBubbleSort").prop("disabled" , false);
    $("#btnInsertionSort").prop("disabled" , false);
    $("#btnShellSort").prop("disabled" , false);
    $("#btnOddEvenSort").prop("disabled" , false);
    $("#btnCombSort").prop("disabled" , false);
    $("#btnycleSort").prop("disabled" , false);

    $("#btn-Sort").prop("disabled" , false);
  }
}

////////////////////////////////////////////////////////////////////
//SETUP FUNCTION FOR P5
///////////////////////////////////////////////////////////////////
function setup()
{
  var cnv = createCanvas(totalWidth - 65, 500);
  cnv.parent("card-body-sketch");

  for(let i = 0 ; i < width ; i++)
  {
    values.push(Math.floor(random(10,height)));
  }

  ////////////////////////////////////////////////////////////////////
  // SHELL SORT VALUES
  ////////////////////////////////////////////////////////////////////
  gap = Math.floor(values.length/2);
  q = gap;

  ////////////////////////////////////////////////////////////////////
  // COMB SORT VALUES
  ////////////////////////////////////////////////////////////////////
  gap1 = values.length;

  ////////////////////////////////////////////////////////////////////
  //BOOLEAN VALUES FOR BUTTONS
  ////////////////////////////////////////////////////////////////////
  selectionSortBtn = false;
  bubbleSortBtn = false;
  insertionSortBtn = false;
  radixSortBtn = false;
  oddEvenSortBtn = false;
  combSortBtn = false;
  cycleSortBtn = false;
}



////////////////////////////////////////////////////////////////////
//DRAW FUNCTION FOR P5
////////////////////////////////////////////////////////////////////
function draw()
{
  background("#0c7b93");
  fill("#fcf8e8");
  // stroke(0);
  // strokeWeight(2);
  changeState_btn();
  if(selectionSortBtn)
  {
    SelectionSort_p();
  }
  else if(insertionSortBtn)
  {
    InsertionSort_p();
  }
  else if(bubbleSortBtn)
  {
    BubbleSort_p();
  }
  else if(shellSortBtn)
  {
      shellSort_p()
  }
  else if(oddEvenSortBtn)
  {
    oddEvenSort_p();
  }
  else if(combSortBtn)
  {
    combSort_p();
  }
  else if(cycleSortBtn)
  {
    cycleSort_p();
  }

  ////////////////////////////////////////////////////////////////////
  //DRAWING BARS
  ////////////////////////////////////////////////////////////////////
  for(let q = 0 ; q <= width ; q+=15)
  {
    rect(q ,height - values[q], 15 ,values[q]);
  }

}

////////////////////////////////////////////////////////////////////
// GENERATING RANDOM VALUES
////////////////////////////////////////////////////////////////////
function generateValues()
{
  console.log("GENERATED");
  for(let i = 0 ; i < width ; i++)
  {
    values.push(Math.floor(random(10,height)));
  }
  i = 0;
}

////////////////////////////////////////////////////////////////////
//SORTING THE BAR
////////////////////////////////////////////////////////////////////
function SelectionSort_p()
{
  if(i < values.length)
  {
    let min = Number.MAX_VALUE;
    let swapPos = i;
    for(let j = i+1 ; j < values.length ; j++)
    {
      if(min >= values[j])
      {
        min = values[j];
        swapPos = j;
      }
    }

    if(values[i] > min)
    {
      let temp = values[i];
      values[i] = min;
      values[swapPos] = temp;
    }
  }
  else
  {
    selectionSortBtn = false;
    looping = false;
    i = 0;
  }
  i++;
}

////////////////////////////////////////////////////////////////////
// INSERTION SORT
////////////////////////////////////////////////////////////////////
function InsertionSort_p()
{
  if(i+1 < values.length)
  {
    let key = values[i+1];
    let j = i;
    while(j >= 0 && values[j] > key)
    {
      values[j+1] = values[j];
      j--;
    }
    values[j+1] = key;
  }
  else
  {
    insertionSortBtn = false;
    looping = false;
    i = 0;
  }
  i++;
}

////////////////////////////////////////////////////////////////////
// BUBBLE SORTING
////////////////////////////////////////////////////////////////////
function BubbleSort_p()
{
  if(i < values.length - 1)
  {
    for(let j = 0 ; j < values.length - i - 1 ; j++)
    {
      if(values[j] > values[j+1])
      {
        let temp = values[j];
        values[j] = values[j+1];
        values[j+1] = temp;
      }
    }
    i++;
  }
  else
  {
    bubbleSortBtn = false;
    looping = false;
    i = 0;
  }

}

////////////////////////////////////////////////////////////////////
//SHELL Sort
////////////////////////////////////////////////////////////////////
function shellSort_p()
{
  if(gap > 0)
  {
    if(q < values.length)
    {
      let temp = values[q];
      let j;
      for(j = q ; j >= gap && values[j-gap] > temp ; j-=gap)
      {
        values[j] = values[j-gap];
      }
      values[j] = temp;
    }
    q++;
    if(q == values.length)
    {
      gap = Math.floor(gap/2);
      q = gap;
    }
  }
  else
  {
    shellSortBtn = false;
    looping = false;
    gap = values.length / 2;
  }
}

function oddEvenSort_p()
{
  if(!isSorted)
  {
    isSorted = true;
    for(let i = 1 ; i <= values.length - 2 ; i+=2)
    {
      if(values[i] > values[i+1])
      {
        temp = values[i];
        values[i] = values[i+1];
        values[i+1] = temp;
        isSorted = false;
      }
    }

    for (let i=0; i<=values.length-2; i=i+2)
    {
      if (values[i] > values[i+1])
      {

        temp = values[i];
        values[i] = values[i+1];
        values[i+1] = temp;
        isSorted = false;
      }
    }

  }
  else
  {
    oddEvenSortBtn = false;
    looping = false;
    isSorted = false;
  }
}

function combSort_p()
{
    if(gap1 != 1)
    {
      // frameRate(15);
      gap1 = Math.floor(gap1*10/13);
      if(gap1 < 1)
      {
        return;
      }

      for(let i = 0 ; i < values.length - gap1 ; i++)
      {
        if(values[i] > values[i+gap1])
        {
          let temp = values[i];
          values[i] = values[i+gap1];
          values[i+gap1] = temp;
        }
      }

    }
    else
    {
      // frameRate(60);
      combSortBtn = false;
      looping = false;
      gap1 = values.length;
    }
}

function cycleSort_p()
{
  if(cycle_start <= values.length - 2)
  {
    // frameRate(20);
    let item = values[cycle_start];
    let pos = cycle_start;
    for(let i = cycle_start + 1 ; i < values.length ; i++)
    {
      if(values[i] < item)
      {
        pos++;
      }
    }

    if(pos != cycle_start)
    {
      while(item == values[pos])
      {
        pos++;
      }

      if(pos != cycle_start)
      {
        let temp = item;
        item = values[pos];
        values[pos] = temp;
      }

      while(pos != cycle_start)
      {
        pos = cycle_start;
        for(let i = cycle_start+1 ; i < values.length ; i++)
        {
          if(values[i] < item)
          {
            pos++;
          }
        }

        while(item == values[pos])
        {
          pos++;
        }

        if(item != values[pos])
        {
          let temp = item;
          item = values[pos];
          values[pos] = temp;
        }
      }
    }
  }
  else
  {
    cycle_start = 0;
    // frameRate(60);
    cycleSortBtn = false;
    looping = false;
  }
  cycle_start++;
}
