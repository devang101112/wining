// Submit Loan Function
function submitLoan() {
    const bank = document.getElementById("bank").value;
    const loanAmount = document.getElementById("loan-amount").value;
    const loanReason = document.getElementById("loan-reason").value;

    if (loanAmount && loanReason) {
        alert(`Loan request submitted! \nBank: ${bank} \nAmount: ₹${loanAmount} \nReason: ${loanReason}`);
    } else {
        alert('Please fill in all fields.');
    }
}

// Apply for Insurance
function applyInsurance() {
    alert("Insurance application submitted successfully!");
}

// Claim Insurance
function claimInsurance() {
    alert("Insurance claim request submitted!");
}

// Sell Crop Function
function sellCrop() {
    const cropType = document.getElementById("crop-type").value;
    const cropAmount = document.getElementById("crop-amount").value;

    if (cropType && cropAmount) {
        alert(`Selling ${cropAmount} quintals of ${cropType} to the city market!`);
    } else {
        alert('Please fill in all fields.');
    }
}
