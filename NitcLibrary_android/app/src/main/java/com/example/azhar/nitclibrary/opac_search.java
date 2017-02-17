package com.example.azhar.nitclibrary;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.InputType;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

/**
 * Created by azhar on 28/11/16.
 */

public class opac_search extends AppCompatActivity
{

    public Button mybutton;
    public EditText mytext;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.opac_search_layout);

        mybutton = (Button)findViewById(R.id.searchbtn);
        mytext = (EditText)findViewById(R.id.input_name);

        mytext.setInputType(InputType.TYPE_CLASS_NUMBER | InputType.TYPE_NUMBER_FLAG_DECIMAL);

    }

    public void showlayout(View view){
        Intent intent = new Intent(opac_search.this, opac_map.class);
        intent.putExtra("Rack_number", mytext.getText().toString());
        startActivity(intent);
    }

}
