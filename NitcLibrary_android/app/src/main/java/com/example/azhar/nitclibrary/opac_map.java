package com.example.azhar.nitclibrary;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

/**
 * Created by azhar on 28/11/16.
 */

public class opac_map extends AppCompatActivity
{

    private WebView mWebView;
//    private static final String TAG = "opac_map";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.opac_search_webview);

        final String data = getIntent().getExtras().getString("Rack_number","0");

        Toast.makeText(getApplicationContext(), data, Toast.LENGTH_SHORT).show();

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

        //mWebView.setRotation(-90);
        //mWebView.setInitialScale(50);

        mWebView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);

        //Enable alert dialogs in webview
        mWebView.setWebChromeClient(new WebChromeClient());

        final ProgressDialog mProgressDialog = new ProgressDialog(this);
        mProgressDialog.setIndeterminate(true);
        mProgressDialog.setMessage("Loading...");
        mProgressDialog.show();

        mWebView.loadUrl("file:///android_asset/library_layout.html");
        mWebView.setWebViewClient(new WebViewClient()
        {
            public void onPageFinished(WebView view, String url)
            {
                mWebView.loadUrl("javascript:init('" + data + "')");
                if (mProgressDialog.isShowing())
                        mProgressDialog.dismiss();
            }
        });

    }

}
