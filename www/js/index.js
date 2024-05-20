/**
* Copyright 2016 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var Messages = {
    // Add here your messages for the default language.
    // Generate a similar file with a language suffix containing the translated messages.
    // key1 : message1,
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){
	// Override the default Direct Update interface.
	wl_directUpdateChallengeHandler.handleDirectUpdate = function(directUpdateData, directUpdateContext) {
		// Create a dialog.
		navigator.notification.confirm(
		    'Custom dialog body text', 
			// Handle dialog buttons.
			function(buttonIndex) {
				if (buttonIndex == 1) {
					directUpdateContext.start();
				} else {
					wl_directUpdateChallengeHandler.submitFailure();
				}
			},
		    'Custom dialog title text',
		    ['Update']
		);
	};

	// Used to trigger a request to the MobileFirst Server, to check for updated web resources.	
	WLAuthorizationManager.obtainAccessToken()
  	.then (
    	function() {
      		console.log("*** Obtained token successfully.");
    	},
    	function() {
      		console.log("*** Failed obtaining token.");
    	}
  	);  
}
