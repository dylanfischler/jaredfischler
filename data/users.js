module.exports = function(db){
  return {
    personal_details: function(){
      return new Promise((resolve, reject) => {
        let query = "SELECT * FROM user WHERE user_id=1";
        db.query({ query }).then((result) => {
          if(!result.length) reject("No user found with ID 1");
          var resolvedResult = db.resolveBuffers(result);

          query = "\
            SELECT I.title, I.content, S.title AS section \
            FROM user_resume_item I, user_resume_section S\
            WHERE I.user_id=1 AND I.resume_section_id=S.id";

          db.query({ query }).then((resumeResults) => {
            var resolvedResumeResults = db.resolveBuffers(resumeResults);

            var ret = {
              user_details: resolvedResult[0],
              user_resume: resolvedResumeResults
            };

            resolve(ret);
          }).catch((err) => reject(err));
        }).catch((err) => {
          reject(err);
        })
      });
    }
  };
};