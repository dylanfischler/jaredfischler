'use strict';

let mysql = require('mysql');
let fs = require('fs');

var projects = [{
  "title": "Floating Islands",
  "id": "Island",
  "cat_id": 1,
  "desc": "Work in progress models created for a personal project. Sculpted in Zbrush. Rendered in Cinema4d",
  "mainType": 1,
  "addImgs": ["/includes/project_images/Island1", "/includes/project_images/Island2"]
},
{
  "title": "Boston Children's Hospital: Unity Optimized Game Assets",
  "id": "Assets",
  "cat_id": 1,
  "desc": "Assets created in Zbrush and Cinema4d for Boston Children's Hospital's Unity-based Interactive Media Wall",
  "mainType": 1,
  "addImgs": ["/includes/project_images/Assets1", "/includes/project_images/Assets2"]
},
{
  "title": "Pirate Assets",
  "id": "Pirate",
  "cat_id": 1,
  "desc": "Assets created in Zbrush and 3dCoat for a future character model",
  "mainType": 1,
  "addImgs": ["/includes/project_images/Pirate1", "/includes/project_images/Pirate2"]
},
{
  "title": "Child's Room",
  "id": "Child",
  "cat_id": 1,
  "desc": "A child's room made in Zbrush, 3dCoat, and Cinema4d",
  "mainType": 1,
  "addImgs": ["/includes/project_images/Child1", "/includes/project_images/Child2"]
},
{
  "title": "Boston Children's Hospital: Character Models",
  "id": "BCH",
  "cat_id": 1,
  "desc": "Character models created for Boston Children's Hospital's Interactive Media Wall",
  "mainType": 1,
  "addImgs": ["/includes/project_images/BCH1", "/includes/project_images/BCH2"]
},
{
  "title": "Remì the Raptor",
  "id": "Raptor",
  "cat_id": 1,
  "desc": "A velociraptor sculpted in Zbrush and painted in 3dCoat",
  "mainType": 1,
  "addImgs": ["/includes/project_images/Raptor1", "/includes/project_images/Raptor2", "/includes/project_images/Raptor3"]
},
{
  "title": "Living Room",
  "id": "LivingRoom",
  "cat_id": 1,
  "desc": "A Final Project for my Lighting/Rendering class. The first untextured model was provided by my professor.All lighting and texturing as well as the additional modeled assets were created in Cinema4d.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/LR1", "/includes/project_images/LR2", "/includes/project_images/LR3", "/includes/project_images/LR4", "/includes/project_images/LR5"]
},
{
  "title": "Work Bench",
  "id": "WorkBench",
  "cat_id": 1,
  "desc": "A work bench procedurally textured and rendered in Cinema4d. All models were provided except for the brick wall which I modeled and textured in Cinema4d.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/WB1", "/includes/project_images/WB2", "/includes/project_images/WB3"]
},
{
  "title": "Vintage Bike (Work in Progress)",
  "id": "vintagebike",
  "cat_id": 1,
  "desc": "Work in progress render of a Vintage Bike. Modeled, textured, and rendered in Cinema4d.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/VB2", "/includes/project_images/VB3", "/includes/project_images/VB4"]
},
{
  "title": "Break Room",
  "id": "breakroom",
  "cat_id": 1,
  "desc": "An Office Break Room created in Cinema4d. Responsible for Lighting, Rendering, and Modeling all but the couch model, the coffeemaker model, and the snack machine.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/BR1", "/includes/project_images/BR2", "/includes/project_images/BR3", "/includes/project_images/BR4", "/includes/project_images/BR5"]
},
{
  "title": "Low-Poly Room",
  "id": "Low-poly",
  "cat_id": 1,
  "desc": "A low-poly style model of my bedroom.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/Poly1", "/includes/project_images/Poly2", "/includes/project_images/Poly3", "/includes/project_images/Poly4"]
},
{
  "title": "Low-Poly Landscape II",
  "id": "Land-PolyII",
  "cat_id": 1,
  "desc": "Exploration of low-poly environments.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/Land-PolyII1", "/includes/project_images/Land-PolyII2"]
},  
{
  "title": "Low-Poly Landscape",
  "id": "Land-Poly",
  "cat_id": 1,
  "desc": "Exploration of low-poly environments.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/LandPoly1", "/includes/project_images/LandPoly2", "/includes/project_images/LandPoly3"]
},
{
  "title": "Concept Designs for The Voyage",
  "id": "concept_design_for_the_voyage",
  "cat_id": 1,
  
  "desc": "In preparation for a new chapter of The Voyage, I have started to conceptualize what creatures may populate the environments and what those environments may look like.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/ConceptAlternative1", "/includes/project_images/ConceptAlternative2", "/includes/project_images/ConceptAlternative3", "/includes/project_images/ConceptAlternative4", "/includes/project_images/ConceptAlternative5"]
},
{
  "title": "Concept Design: Spacecraft",
  "id": "concept_design_spacecraft",
  "cat_id": 1,
  "desc": "A spacecraft concept for The Voyage",
  "mainType": 1,
  "addImgs": ["/includes/project_images/SpacecraftAlternative1", "/includes/project_images/SpacecraftAlternative2"]
},
{
  "title": "Plate Camera",
  "id": "plate_camera",
  "cat_id": 1,
  "desc": "A Plate Camera. Modeled, textured, and lit in Cinema 4d.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/CameraAlternative1", "/includes/project_images/CameraAlternative2", "/includes/project_images/CameraAlternative3", "/includes/project_images/CameraAlternative4"]
},
{
  "title": "Experiments",
  "id": "experiments",
  "cat_id": 1,
  "desc": "Results from various experiments in Cinema4d.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/ExperimentAlternative1", "/includes/project_images/ExperimentAlternative2", "/includes/project_images/ExperimentAlternative3", "/includes/project_images/ExperimentAlternative4"]
},
{
  "title": "Opthalma",
  "id": "OP",
  "cat_id": 2,
  "desc": "A video game trailer",
  "mainType": 2,
  "html": "<iframe src'https://player.vimeo.com/video/149871907' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href='https://vimeo.com/149871907'>Ophthalma - A Trailer</a> from <a href='https://vimeo.com/jaredfischler'>Jared Fischler</a> on <a href='https://vimeo.com'>Vimeo</a>.</p>",
  "addImgs": ["/includes/project_images/OP1", "/includes/project_images/OP2", "/includes/project_images/OP3"]
},
{
  "title": "Minion Character",
  "id": "minion",
  "cat_id": 2,
  "desc": "Character concept design animated in motion capture.",
  "mainType": 2,
  "html": "<iframe width='1280' height='720' src='https://www.youtube.com/embed/okGm1_Qmmdk?rel=0' frameborder='0' allowfullscreen></iframe>",
  "addImgs": ["/includes/project_images/Stick1", "/includes/project_images/Stick2", "/includes/project_images/Stick3"]
},  
{
  "title": "Flight",
  "id": "the_Flight",
  "cat_id": 2,
  "desc": "Fly through a low-poly land",
  "mainType": 2,
  "html": "<iframe width='1280' height='720' src='https://www.youtube.com/embed/Qx3gySqZiIg?rel=0' frameborder='0' allowfullscreen></iframe>",
  "addImgs": ["/includes/project_images/Flight1", "/includes/project_images/Flight2", "/includes/project_images/Flight3"]
},
{
  "title": "The Voyage | Ch.1: Voyage Begins",
  "id": "the_voyage_ch1_voyage_begins",
  "cat_id": 2,
  "desc": "The start of a journey. Music -- Chord Left - Agnes Obel",
  "mainType": 2,
  "html": "<iframe width='1280' height='720' src='//www.youtube.com/embed/To8wZwBR-xg?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>",
  "addImgs": ["/includes/project_images/VoyageAlternative1", "/includes/project_images/VoyageAlternative2", "/includes/project_images/VoyageAlternative3", "/includes/project_images/VoyageAlternative4", "/includes/project_images/VoyageAlternative5", "/includes/project_images/VoyageAlternative6", "/includes/project_images/VoyageAlternative7", "/includes/project_images/VoyageAlternative8", "/includes/project_images/VoyageAlternative9"]
},
{
  "title": "Why Buy Local?",
  "id": "why_buy_local",
  "cat_id": 2,
  "desc": "My first AfterEffects Animation: A motion graphic PSA about locally grown food.",
  "mainType": 2,
  "html": "<iframe src='//player.vimeo.com/video/106324933?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
},
{
  "title": "Dream Lapse",
  "id": "dream_lapse",
  "cat_id": 2,
  "desc": "Experimenting in After-effects with the help of Blockhead. Track: Triptych Pt.3 - Blockhead, Music by Cavelight",
  "mainType": 2,
  "html": "<iframe src='//player.vimeo.com/video/90440259?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
},
{
  "title": "Birth - The Infant's Discovery of Self",
  "id": "birth_the_infants_discovery_of_self",
  "cat_id": 2,
  "desc": "A short piece exploring the process of discovery and awareness of self.",
  "mainType": 2,
  "html": "<iframe src='//player.vimeo.com/video/94679492?title=0&amp;byline=0&amp;portrait=0&amp;color=000' width='500' height='281' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
},
{
  "title": "The Cubicle",
  "id": "the_cubicle",
  "cat_id": 2,
  "desc": "An animation about a man named Malcom who discovers an old favorite of his on his computer. More to come!",
  "mainType": 2,
  "html": "<iframe src='//player.vimeo.com/video/94576283?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
},
{
  "title": "Animation Experiments",
  "id": "animation_experiments",
  "cat_id": 2,
  "desc": "Experimentation in Cinema 4d and AfterEffects.",
  "mainType": 2,
  "html": "<iframe width='1280' height='720' src='//www.youtube.com/embed/8wu3SIAf_PI?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>",
  "addHtml": ["<iframe width='1280' height='720' src='//www.youtube.com/embed/oMJ4KsBzWUA?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>", "<iframe width='1280' height='720' src='//www.youtube.com/embed/AJRABMW7k-k?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>"]
},
{
  "title": "The Study Montage",
  "id": "the_study_montage",
  "cat_id": "3",
  "desc": "A video montage",
  "mainType": 2,
  "html": "<iframe src='//player.vimeo.com/video/108959227?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff' width'1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
},
{
  "title": "The Forgotten Keys",
  "id": "the_forgotten_keys",
  "cat_id": "3",
  "desc": "A story about a forgotten pair of keys",
  "mainType": 2,
  "html": "<iframe src='//player.vimeo.com/video/108353542?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
},
{
  "title": "The Date",
  "id": "the_date",
  "cat_id": "3",
  "desc": "An Experiment in continuity editing",
  "mainType": 2,
  "html": "<iframe src='//player.vimeo.com/video/108298047?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff' width='1280' height='720' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
},
{
  "title": "City Scene",
  "id": "city_scene",
  "cat_id": 4,
  "desc": "A city scene composited and painted using Adobe Photoshop. Pictures used are not owned by me.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/cs1"]
},
{
  "title": "Picture Book Illustration",
  "id": "picture_book",
  "cat_id": 4,
  "desc": "Digital illustration made to fit a picture book style.",
  "mainType": 1,
  "addImgs": ["/includes/project_images/picturebookalternative1", "/includes/project_images/picturebookalternative2"]
},
{
  "title": "Palace - Alternative Concept",
  "id": "palace_alternative_concept",
  "cat_id": 4,
  "desc": "An alternative concept for the antagonist's palace. Designed for a Broadway set. ",
  "mainType": 1
},
{
  "title": "Palace - Concept 3",
  "id": "palace_concept3",
  "cat_id": 4,
  "desc": "The final concept for the antagonist's palace. Designed for a Broadway set.",
  "mainType": 1
},
{
  "title": "Palace - Concept 2",
  "id": "palace_concept2",
  "cat_id": 4,
  "desc": "An earlier iteration of the antagonist's palace. Designed for a Broadway set.",
  "mainType": 1
},
{
  "title": "Palace - Original Concept",
  "id": "palace_concept1",
  "cat_id": 4,
  "desc": "The original concept for the antagonist's palace. Designed for a Broadway set.",
  "mainType": 1
},
{
  "title": "Oasis - Original Concept",
  "id": "oasis_concept1",
  "cat_id": 4,
  "desc": "The original concept for an oasis scene. Designed for a Broadway set.",
  "mainType": 1
},
{
  "title": "Oasis - Concept 2",
  "id": "oasis_concept2",
  "cat_id": 4,
  "desc": "The final concept design for an oasis scene. Designed for a Broadway set.",
  "mainType": 1
},
{
  "title": "Font Design - Dystopian",
  "id": "font_design_dystopian",
  "cat_id": 5,
  "desc": "A font whose chaotic tendencies are reminiscent of dystopian literature.",
  "mainType": 1
},
{
  "title": "Helvetica Poster Series",
  "id": "helvetica_poster_series",
  "cat_id": 5,
  "desc": "A poster series inspired by the movie \"Helvetica\".",
  "mainType": 1,
  "addImgs": ["/includes/project_images/HelveticaAlternative1", "/includes/project_images/HelveticaAlternative2", "/includes/project_images/HelveticaAlternative3"]
},
{
  "title": "The Puppet",
  "id": "the_puppet",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
},
{
  "title": "Mime",
  "id": "mime",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
},
{
  "title": "Inception Movie Poster",
  "id": "inception_movie_poster",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
},
{
  "title": "Donnie Darko",
  "id": "donnie_darko",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
},
{
  "title": "Anthony Hopkins",
  "id": "anthony_hopkins",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
},
{
  "title": "Clint Eastwood",
  "id": "clint_eastwood",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
},
{
  "title": "Man in Suit",
  "id": "man_in_suit",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
},
{
  "title": "Character Sketches",
  "id": "character_sketches",
  "cat_id": 6,
  "desc": "",
  "mainType": 3
}];

const dbConfigBuffer = fs.readFileSync('./config/db_config.json');
let dbConfig = JSON.parse(dbConfigBuffer.toString());

let pool = mysql.createPool(dbConfig);

/*
pool.getConnection(function(err, connection) {
  let query;
  let project = projects[0];

  if(project.html) {
    query = `\
    INSERT INTO project (title, id, cat_id, \`desc\`, head_type, html) \
    VALUES ('${project.title}','${project.id}',${project.cat_id},'${project.desc}','${project.mainType}','${project.html}');`;
  }
  else {
    query = `\
    INSERT INTO project (title, id, cat_id, \`desc\`, head_type) \
    VALUES ('${project.title}','${project.id}',${project.cat_id},'${project.desc}','${project.mainType}');`;
  }

  connection.query(query, function(err, result) {
    if(err) console.error(err);
    console.log("result", result);

    let id = result.insertId;

    // if(project.addImgs) {
    //   for(var j in project.addImgs){
    //     console.log(project.addImgs[j]);
    //     connection.query("INSERT INTO project_add_image (image_path, project_id) VALUES (?,?)", [project.addImgs[j], id], function(err, result) {
    //       if(err) console.error(err);
    //       else console.log("added image");
    //     });
    //   }
    // }


    connection.release();
  });
}); */

var processProject = (i) => {
  console.log("i", i);
  pool.getConnection(function(err, connection) {
    let query;
    let project = projects[i];

    if(i >= projects.length) return;

    if(project.html) {
      query = `\
      INSERT INTO project (title, id, cat_id, \`desc\`, head_type, html) \
      VALUES (${pool.escape(project.title)},${pool.escape(project.id)},${pool.escape(project.cat_id)},${pool.escape(project.desc)},${pool.escape(project.mainType)},${pool.escape(project.html)});`;
    }
    else {
      query = `\
      INSERT INTO project (title, id, cat_id, \`desc\`, head_type) \
      VALUES (${pool.escape(project.title)},${pool.escape(project.id)},${pool.escape(project.cat_id)},${pool.escape(project.desc)},${pool.escape(project.mainType)});`;
    }

    connection.query(query, function(err, result) {
      if(err) console.error("error", err);
      console.log("result", result);

      let id = result.insertId;

      // var done = 0;

      // if(project.addImgs) {
      //   for(var j in project.addImgs){
      //     console.log(project.addImgs[j]);
      //     connection.query("INSERT INTO project_add_image (image_path, project_id) VALUES (?,?)", [project.addImgs[j], id], function(err, result) {
      //       if(err) console.error(err);
      //       // else console.log("added image");
      //       else {
      //         if(++done === project.addImgs.length) {
      //           connection.release();
      //           // processProject(++i);
      //         }
      //       }
      //     });
      //   }
      // }
      // else {

      // }

      connection.release();
      processProject(++i);
      
      
    });
  });
};

var processAddImgs = (i) => {
  console.log("i", i);
  pool.getConnection(function(err, connection) {
    let query;
    let project = projects[i];

    if(i >= projects.length) return;

    connection.query(`SELECT * FROM project WHERE id='${project.id}'`, function(err, result) {
      if(err) console.error(err);
      console.log("result", result);
      if(!result.length) console.error("project not found");
      else {
        var id = result[0].project_id;

        var done = 0;
        if(project.addImgs) {
          for(var j in project.addImgs){
            let q = `INSERT INTO project_add_image (image_path, project_id) VALUES (${connection.escape(project.addImgs[j])},${parseInt(id)})`;
            // console.log("q", q);

            connection.query(q, function(err, result) {
              if(err) console.error(err);
              // else console.log("added image");
              else {
                if(++done === project.addImgs.length) {
                  connection.release();
                  processAddImgs(++i);
                }
              }
            });

          }
        }
      }
    });
  });

}

// processProject(0);

processAddImgs(0);

/*
for(var i in projects) {
  console.log(projects[i]);

  pool.getConnection(function(err, connection) {
    let query;
    let project = projects[i];

    if(project.html) {
      query = `\
      INSERT INTO project (title, id, cat_id, \`desc\`, head_type, html) \
      VALUES ('${project.title}','${project.id}',${project.cat_id},'${project.desc}','${project.mainType}','${project.html}');`;
    }
    else {
      query = `\
      INSERT INTO project (title, id, cat_id, \`desc\`, head_type) \
      VALUES ('${project.title}','${project.id}',${project.cat_id},'${project.desc}','${project.mainType}');`;
    }

    connection.query(query, function(err, result) {
      if(err) console.error(err);
      console.log("result", result);

      let id = result.insertId;
      // connection.release();
    });
  });
}*/
