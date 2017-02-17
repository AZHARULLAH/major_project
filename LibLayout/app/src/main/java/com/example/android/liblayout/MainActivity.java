package com.example.android.liblayout;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;
    public String azhar = "Azharullah";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mWebView = (WebView) findViewById(R.id.activity_main_wv);

        //enable javascript
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        //force all links to open in webview only
        mWebView.setWebViewClient(new WebViewClient());

        //Enable zoom controls in webview
        mWebView.getSettings().setBuiltInZoomControls(true);

        //Set initial zoom settings
        mWebView.getSettings().setUseWideViewPort(true);
        mWebView.getSettings().setLoadWithOverviewMode(true);
        mWebView.setInitialScale(1);

//        mWebView.setRotation(-90);
//        mWebView.setInitialScale(50);

        mWebView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);

        mWebView.loadUrl("file:///android_asset/library_layout.html");
        mWebView.setWebViewClient(new WebViewClient(){
            public void onPageFinished(WebView view, String url){
                mWebView.loadUrl("javascript:init('" + azhar + "')");
            }
        });

    }
}
