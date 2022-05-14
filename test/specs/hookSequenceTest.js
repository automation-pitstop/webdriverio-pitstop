console.log("INFO : ===== Executing code prior to describe block =====");

describe("Hook Sequence test", () => {
    console.log("INFO : ===== Executing code inside the describe block =====");
    it("First IT block", async () => {
        console.log("INFO : ===== Executing first IT block =====");
    });
    it("Second IT block", async () => {
        console.log("INFO : ===== Executing second IT block =====");
    });
});

/* 
=========> onPrepare hook ===== Create/Delete folders

	=========> onWorkerStart hook ===== Create the test configuration
	[Spec1] =========> beforeSession hook =====
	[Spec1] =========> Executing code prior to describe block ===== 
	[Spec1] =========> Executing code inside the describe block =====
	[Spec1] =========> before hook ===== Control browser and wdio commands
	[Spec1] =========> beforeSuite hook =====
		[Spec1] =========> beforeTest hook =====
		[Test1] =========> IT block =====
		[Spec1] =========> afterTest hook ===== Capture screenshot
		[Spec1] =========> beforeTest hook =====
		[Test2] =========> IT block =====
		[Spec1] =========> afterTest hook ===== Capture screenshot
	[Spec1] =========> afterSuite hook =====
	[Spec1] =========> after hook =====
	[Spec1] =========> afterSession hook =====
	=========> onWorkerEnd hook =====
	
	=========> onWorkerStart hook =====
	[Spec2] =========> beforeSession hook =====
	[Spec2] =========> Executing code prior to describe block ===== 
	[Spec2] =========> Executing code inside the describe block =====
	[Spec2] =========> before hook =====
	[Spec2] =========> beforeSuite hook =====
		[Spec2] =========> beforeTest hook =====
		[Test1] =========> IT block =====
		[Spec2] =========> afterTest hook =====
		[Spec2] =========> beforeTest hook =====
		[Test2] =========> IT block =====
		[Spec2] =========> afterTest hook =====
	[Spec2] =========> afterSuite hook =====
	[Spec2] =========> after hook =====
	[Spec2] =========> afterSession hook =====
	=========> onWorkerEnd hook =====
	
=========> onComplete hook ===== Create Reports
 */
