function reading(pages, pagesRead, days) {
    let totalTimeNeeded = pages / pagesRead;
    let totalHoursPerDay = totalTimeNeeded / days;
    console.log(totalHoursPerDay);
}

reading(212, 20 , 2);
reading(432, 15 , 4);