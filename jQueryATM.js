$(document).ready(function(){
	console.log("document ready")
	var balance
	var savingsbalance
	balance = 0
	savingsbalance = 0


	$("#balance").click(function(){
		console.log("Balance button works")
		$("#message").text("Your checking balance is " + balance.toString() + ", and your savings balance is " + savingsbalance.toString())
	})

	$("#deposit").click(function(){
		var amount = parseFloat($("#d_amount").val())
		balance = balance + amount 
		$("#message").text("Thank you for your deposit!")
	})

	$("#withdraw").click(function(){
		var amount = parseFloat($("#w_amount").val())
		if(amount > balance){
			$("#message").text("You do not have enough money!")
		} else {
			balance = balance - amount
			$("#message").text("Withdraw complete. Thank you for your business!")
		}
	})
	$("#x2save").click(function(){
		var amount = parseFloat($("#x2s_amount").val())
		if(amount > balance){
			$("#message").text("You do not have enough money in checking!")
		} else {
			balance = balance - amount 
			savingsbalance = savingsbalance + amount
			$("#message").text("Transfer from checking to savings complete. Thank you.")
		}
	})
	$("#x2check").click(function(){
		var amount = parseFloat($("#x2c_amount").val())
		if(amount > savingsbalance){
			$("#message").text("You do not have enough money in savings!")
		} else {
			balance = balance + amount 
			savingsbalance = savingsbalance - amount
			$("#message").text("Transfer from savings to checking complete. Thank you.")
		}
	})


})









