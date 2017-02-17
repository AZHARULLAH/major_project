var eee_module = angular.module("eee_dept", [])
eee_module.controller("eee_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '1', id1: '621.3', id2: '621.3' },
        	{ no: '2', id1: '621.301', id2: '621.31239' },
        	{ no: '3', id1: '621.3124', id2: '621.3189' },
        	{ no: '4', id1: '621.319', id2: '621.31921' },
        	{ no: '5', id1: '621.31921', id2: '621.369' },
        	{ no: '6', id1: '621.37', id2: '621.384022' }
		];
	}
);

var cse_module = angular.module("cse_dept", [])
cse_module.controller("cse_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '69', id1: '001.4', id2: '001.64' },
			{ no: '68', id1: '001.64', id2: '001.642' },
           	{ no: '67', id1: '001.6424', id2: '003.4' },
			{ no: '66', id1: '003.01', id2: '004.649' },
        	{ no: '65', id1: '004.6', id2: '005.299' },
        	{ no: '64', id1: '005.2', id2: '005.99' },
        	{ no: '63', id1: '005.8', id2: '621.38195' }
		];
	}
);

var coe_module = angular.module("coe_dept", [])
coe_module.controller("coe_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '62', id1: '621.38195', id2: '621.381957' },
			{ no: '61', id1: '621.381958', id2: '621.3829' },
           	{ no: '60', id1: '621.3801', id2: '621.38819' },
			{ no: '59', id1: '620', id2: '621.3999' }
		];
	}
);

var cte_module = angular.module("cte_dept", [])
cte_module.controller("cte_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '13', id1: '629.8', id2: '629.836' },
			{ no: '14', id1: '629.836', id2: '569.9' }
		];
	}
);

var cie_module1 = angular.module("cie_dept1", [])
cie_module1.controller("cie_dept_cont1",
	function($scope)
	{
		$scope.racks = [
			{ no: '15', id1: '551', id2: '620.109' },
			{ no: '16', id1: '620.101', id2: '620.11299' },
           	{ no: '17', id1: '620.1123', id2: '623.889' },
			{ no: '18', id1: '624', id2: '624.151' },
			{ no: '19', id1: '624.15101', id2: '624.171' }
		];
	}
);

var cie_module2 = angular.module("cie_dept2", [])
cie_module2.controller("cie_dept_cont2",
	function($scope)
	{
		$scope.racks = [
			{ no: '20', id1: '624.171', id2: '624.176' },
           	{ no: '21', id1: '624.176', id2: '624.183' },
			{ no: '22', id1: '624.1834', id2: '627' },
			{ no: '23', id1: '627', id2: '628.09' },
			{ no: '24', id1: '628.1', id2: '690' }
		];
	}
);

var art_module = angular.module("art_dept", [])
art_module.controller("art_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '25', id1: '690.01', id2: '720-720.99' },
			{ no: '26', id1: '720-720.99', id2: '743.99' },
           	{ no: '27', id1: '744', id2: '799' }
		];
	}
);

var mtm_module = angular.module("mtm_dept", [])
mtm_module.controller("mtm_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '46', id1: '510-510.620', id2: '510.1-510.69' },
			{ no: '47', id1: '510.1-510.69', id2: '512' },
           	{ no: '48', id1: '512', id2: '515' },
			{ no: '49', id1: '515', id2: '515.69' },
           	{ no: '50', id1: '515.7', id2: '519.2-519.29' },
			{ no: '51', id1: '519.2-519.29', id2: '519.99' }
		];
	}
);

var phy_module = angular.module("phy_dept", [])
phy_module.controller("phy_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '52', id1: '530', id2: '530.15' },
			{ no: '53', id1: '530.15', id2: '531.59' },
           	{ no: '54', id1: '531.38-531.59', id2: '533.2-533.99' },
			{ no: '55', id1: '533.2-533.99', id2: '538' },
			{ no: '56', id1: '538.3', id2: '610-619.99' }
		];
	}
);

var ece1_module = angular.module("ece_dept1", [])
ece1_module.controller("ece_dept_cont1",
	function($scope)
	{
		$scope.racks = [
			{ no: '8', id1: '621.38102', id2: '621.3814' },
			{ no: '7', id1: '621.380422', id2: '621.38' }
		];
	}
);

var ece2_module = angular.module("ece_dept2", [])
ece2_module.controller("ece_dept_cont2",
	function($scope)
	{
		$scope.racks = [
			{ no: '10', id1: '621.381502', id2: '621.38152' },
			{ no: '9', id1: '621.3815', id2: '621.381502' }
		];
	}
);

var ece3_module = angular.module("ece_dept3", [])
ece3_module.controller("ece_dept_cont3",
	function($scope)
	{
		$scope.racks = [
			{ no: '11', id1: '621.381528', id2: '621.38172' },
			{ no: '12', id1: '621.38173', id2: '629.8' }
		];
	}
);

var gne_module = angular.module("gne_dept", [])
gne_module.controller("gne_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '58', id1: '620.004', id2: '620.4699' },
			{ no: '57', id1: '600', id2: '619.99' }
		];
	}
);

angular.element(document).ready(function()
{
	angular.bootstrap(document.getElementById("eee_id"), ['eee_dept']);
	angular.bootstrap(document.getElementById("cse_id"), ['cse_dept']);
	angular.bootstrap(document.getElementById("coe_id"), ['coe_dept']);
	angular.bootstrap(document.getElementById("cte_id"), ['cte_dept']);
	angular.bootstrap(document.getElementById("cie_id1"), ['cie_dept1']);
	angular.bootstrap(document.getElementById("cie_id2"), ['cie_dept2']);
	angular.bootstrap(document.getElementById("art_id"), ['art_dept']);
	angular.bootstrap(document.getElementById("mtm_id"), ['mtm_dept']);
	angular.bootstrap(document.getElementById("phy_id"), ['phy_dept']);
	// angular.bootstrap(document.getElementById("ece_id1"), ['ece_dept1']);
	angular.bootstrap(document.getElementById("ece_id2"), ['ece_dept2']);
	angular.bootstrap(document.getElementById("ece_id3"), ['ece_dept3']);
	angular.bootstrap(document.getElementById("gne_id"), ['gne_dept']);
})