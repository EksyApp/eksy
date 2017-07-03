package com.eksy;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.imagepicker.ImagePickerPackage;
import com.wix.interactable.Interactable;
import com.cboy.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       SplashScreen.show(this, true);  // here
       super.onCreate(savedInstanceState);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "EKSY";
    }
}
