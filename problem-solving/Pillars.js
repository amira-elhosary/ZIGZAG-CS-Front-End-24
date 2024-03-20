// problem :
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d


function pillars(numPill, dist, width) {
    if( numPill < 1 || dist < 10 || dist > 30 || width < 10 || width > 50 ){
      return "invalid data";
    }
    else{
    let distance = ( (dist * 100 * (numPill-1) ) + ( ( numPill - 2) * width ) );
    }
      return distance;
    }