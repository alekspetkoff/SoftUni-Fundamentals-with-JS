function vacation(num, typeGroup, day) {
    let totalPrice = 0;
    if (day == "Friday") {
        switch (typeGroup) {
            case "Students":
                totalPrice = num * 8.45;
                if (num >= 30) {
                    totalPrice = totalPrice - totalPrice * 0.15;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
            case "Business":
                totalPrice = num * 10.90;
                if (num >= 100) {
                    totalPrice -= (10 * 10.90);
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
            case "Regular":
                totalPrice = num * 15;
                if (num >= 10 && num <= 20) {
                    totalPrice = totalPrice - totalPrice * 0.05;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
        }
    } else if (day == "Saturday") {
        switch (typeGroup) {
            case "Students":
                totalPrice = num * 9.80;
                if (num >= 30) {
                    totalPrice = totalPrice - totalPrice * 0.15;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
            case "Business":
                totalPrice = num * 15.60;
                if (num >= 100) {
                    totalPrice -= (10 * 15.60);
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
            case "Regular":
                totalPrice = num * 20;
                if (num >= 10 && num <= 20) {
                    totalPrice = totalPrice - totalPrice * 0.05;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
        }
    } else if (day == "Sunday") {
        switch (typeGroup) {
            case "Students":
                totalPrice = num * 10.46;
                if (num >= 30) {
                    totalPrice = totalPrice - totalPrice * 0.15;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
            case "Business":
                totalPrice = num * 16;
                if (num >= 100) {
                    totalPrice -= (10 * 16);
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
            case "Regular":
                totalPrice = num * 22.50;
                if (num >= 10 && num <= 20) {
                    totalPrice = totalPrice - totalPrice * 0.05;
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else console.log(`Total price: ${totalPrice.toFixed(2)}`);
                break;
        }
    }
}

vacation(30,
    "Students",
    "Sunday");
vacation(120,
    "Regular",
    "Saturday");
