package com.example.azhar.nitclibrary;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.view.KeyEvent;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.estimote.sdk.Beacon;
import com.estimote.sdk.BeaconManager;
import com.estimote.sdk.Region;
import com.estimote.sdk.SystemRequirementsChecker;

import java.util.List;
import java.util.UUID;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    private BeaconManager beaconManager;
    private Region region;
    public Boolean inregion;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        // My added lines

        beaconManager = new BeaconManager(getApplicationContext());

//        beaconManager.setBackgroundScanPeriod(5000, 10000);

        TextView textView1 = (TextView)findViewById(R.id.tview1);
        textView1.setVisibility(View.VISIBLE);
        TextView textView2 = (TextView)findViewById(R.id.tview2);
        textView2.setVisibility(View.INVISIBLE);

        beaconManager.setMonitoringListener(new BeaconManager.MonitoringListener() {
            @Override
            public void onEnteredRegion(Region region, List<Beacon> list)
            {
                showNotification(
                        "Welcome to the Central Library!",
                        "You are now in the Beacon region. Search for books or lookout for latest news...");
                inregion = Boolean.TRUE;
                Toast.makeText(getApplicationContext(), "Made true", Toast.LENGTH_SHORT).show();

                TextView textView1 = (TextView)findViewById(R.id.tview1);
                textView1.setVisibility(View.INVISIBLE);
                TextView textView2 = (TextView)findViewById(R.id.tview2);
                textView2.setVisibility(View.VISIBLE);

            }
            @Override
            public void onExitedRegion(Region region)
            {
                // could add an "exit" notification too if you want (-:
                showNotification(
                        "You have exited the Beacon region..!!",
                        "Please enter back into the stack room...");

                inregion = Boolean.FALSE;
                Toast.makeText(getApplicationContext(), inregion.toString() , Toast.LENGTH_SHORT).show();

                TextView textView1 = (TextView)findViewById(R.id.tview1);
                textView1.setVisibility(View.VISIBLE);
                TextView textView2 = (TextView)findViewById(R.id.tview2);
                textView2.setVisibility(View.INVISIBLE);

            }
        });

        beaconManager.connect(new BeaconManager.ServiceReadyCallback() {
            @Override
            public void onServiceReady() {
                beaconManager.startMonitoring(new Region(
                        "monitored region",
                        UUID.fromString("B9407F30-F5F8-466E-AFF9-25556B57FE6D"),
                        19900, 16767));
            }
        });

        // My added lines end


    }

    @Override
    protected void onResume() {
        super.onResume();

        SystemRequirementsChecker.checkWithDefaultDialogs(this);
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_camera)
        {
            // Handle the camera action
            if(inregion == Boolean.FALSE)
            {
                Toast.makeText(getApplicationContext(), "You are out of a beacon region" , Toast.LENGTH_SHORT).show();
            }

        }
        else if (id == R.id.nav_gallery)
        {
            if(inregion == Boolean.FALSE)
            {
                Toast.makeText(getApplicationContext(), "You are out of a beacon region" , Toast.LENGTH_SHORT).show();
            }
            else
            {
                Intent intent = new Intent(MainActivity.this, opac_search.class);
                startActivity(intent);
            }
        }
        else if (id == R.id.nav_slideshow)
        {
            if(inregion == Boolean.FALSE)
            {
                Toast.makeText(getApplicationContext(), "You are out of a beacon region" , Toast.LENGTH_SHORT).show();
            }
            else
            {
                Intent intent = new Intent(MainActivity.this, stack_layout_map.class);
                startActivity(intent);
            }
        }
        else if (id == R.id.nav_share)
        {

        }
        else if (id == R.id.nav_send)
        {

        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    // Lines added by me

    public void showNotification(String title, String message)
    {
        Intent notifyIntent = new Intent(this, MainActivity.class);
        notifyIntent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent pendingIntent = PendingIntent.getActivities(this, 0,
                new Intent[]{notifyIntent}, PendingIntent.FLAG_UPDATE_CURRENT);
        Notification notification = new Notification.Builder(this)
                .setSmallIcon(android.R.drawable.ic_dialog_info)
                .setContentTitle(title)
                .setContentText(message)
                .setAutoCancel(true)
                .setContentIntent(pendingIntent)
                .build();
        notification.defaults |= Notification.DEFAULT_SOUND;
        NotificationManager notificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(1, notification);
    }

    // Lines added by me ends
}
