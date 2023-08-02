
$(function () {
  // $.validator.setDefaults({
  //   submitHandler: function () {
  //     alert("Form successful submitted!");
  //   }
  // });
  $('#quickForm').validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5
      },
      terms: {
        required: true
      },
    },
    messages: {
      email: {
        required: "Please enter a email address",
        email: "Please enter a valid email address"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      terms: "Please accept our terms"
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  });
  // subject category 
  $('#subjectform').validate({
    rules: {
      name: {
        required: true,
        name: true,
      },
      category_id: {
        required: true

      },
      course_category_id: {
        required: true
      },
      video: {
        required: true
      },
    },
    messages: {
      name: {
        required: "Please enter a Subject Name"
      },
      category_id: {
        required: "Please  Select Category"
      },
      course_category_id: {
        required: "Please  Select Course Category"
      },
      video: {
        required: "Please  Upload Video"
      },

    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  });

  $('#element_id').delay(1000).fadeOut(300);
  $('#element_id2').delay(1000).fadeOut(300);

  $('#categoryForm').validate({
    rules: {
      category_name: {
        required: true
      }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  });
});

// Course category 
$('#courseform').validate({
  rules: {
    name: {
      required: true,
      name: true,
    },
    category_id: {
      required: true

    },
    video: {
      required: true
    },
    colorcode: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Please enter a Course Category Name"
    },
    category_id: {
      required: "Please  Select Category"
    },
    colorcode: {
      required: "Please Select color Code for Category"
    },
    video: {
      required: "Please  Upload Video"
    },

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

// Course category 
$('#chapterform').validate({
  rules: {
    name: {
      required: true,
      name: true,
    },
    category_id: {
      required: true

    },
    course_category_id: {
      required: true
    },
    subject_category_id: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Please enter a Chapter Name"
    },
    category_id: {
      required: "Please  Select Category"
    },
    course_category_id: {
      required: "Please Course Category"
    },
    subject_category_id: {
      required: "Please  Select Subject"
    },

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

$('#boardForm').validate({
  rules: {
    name: {
      required: true
    }
  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

// Mentor Form
$('#mentorform').validate({
  rules: {
    name: {
      required: true,
      name: true,
    },
    title: {
      required: true

    },
    mentorimg: {
      required: true
    }

  },
  messages: {
    name: {
      required: "Please Enter Name"
    },
    title: {
      required: "Please Enter Title"
    },
    mentorimg: {
      required: "Please Upload Mentor Image"
    },

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

// testimonials Form
$('#testimonialsform').validate({
  rules: {
    name: {
      required: true,
      name: true,
    },
    star_count: {
      required: true

    },
    testimonialimg: {
      required: true
    }

  },
  messages: {
    name: {
      required: "Please Enter Student Name"
    },
    star_count: {
      required: "Please  Enter star count"
    },
    testimonialimg: {
      required: "Please  Upload Student Image"
    },

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});




// video Form
$('#videoform').validate({
  rules: {
    title: {
      required: true

    },
    chaptervideo: {
      required: true

    }

  },

  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

$('#videoeditform').validate({
  rules: {
    title: {
      required: true

    }
  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});
// Batches 
$('#batchform').validate({
  rules: {
    batch_name: {
      required: true,
      name: true,
    },
    course_category_id: {
      required: true
    },
    start_time: {
      required: true
    },
    end_time: {
      required: true
    }

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});
// scholarShipForm Validate 
$('#scholarShipForm').validate({
  rules: {
    title: {
      required: true
    },
    description: {
      required: true
    }
  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});
// Students Validate 
$('#studentform').validate({
  rules: {
    firstName: {
      required: true
    },
    lastName: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    mobile_no: {
      required: true,
      digits: true,
      minlength: 10
    },
    dob: {
      required: true
    },
    gender: {
      required: true
    },
    fathersName: {
      required: true
    },
    mothersName: {
      required: true
    }

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

// subcriptionPlanForm Validate 
$('#subcriptionPlanForm').validate({
  rules: {
    plan_name: {
      required: true
    },
    plan_price: {
      required: true,
      digits: true
    },
    expireAt: {
      step: false
    }

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});
// recordedVideoForm Validate 
$('#recordedVideoForm').validate({
  rules: {
    student_id: {
      required: true
    },
    category_id: {
      required: true
    },
    course_category_id: {
      required: true
    },
    subject_category_id: {
      required: true
    },
    chapter_id: {
      required: true
    },
    // upload_file: {
    //   required: true,
    //   accept: "video/mp4,video/x-m4v,video/*"
    // }

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});
// digitalMaterialsForm Validate 
$('#digitalMaterialsForm').validate({
  rules: {
    student_id: {
      required: true
    },
    category_id: {
      required: true
    },
    course_category_id: {
      required: true
    },
    subject_category_id: {
      required: true
    },
    chapter_id: {
      required: true
    },
    // upload_file: {
    //   required: true, 
    //   //extension: "png|jpeg|jpg|docx|rtf|doc|pdf",
    // }

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

// liveSessionVideoForm Validate 
$('#liveSessionVideoForm').validate({
  rules: {
    student_id: {
      required: true
    },
    category_id: {
      required: true
    },
    course_category_id: {
      required: true
    },
    subject_category_id: {
      required: true
    },
    chapter_id: {
      required: true
    },
    // upload_file: {
    //   required: true,
    //   accept: "video/mp4,video/x-m4v,video/*"
    // }

  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});

// adminProfileImage Validate 
$('#adminProfileImage').validate({
  rules: {
    name: {
      required: true
    },
    // email: {
    //   required: true
    // },
    mobile: {
      required: true,
      minlength:6,
      maxlength:14
    },
    // password: {
    //   required: true
    // }
  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});


// $('document').ready(function () {
//   /**Check old password */
//   jQuery.validator.addMethod("checkoldpassword", function (value, element, param) {
//     var superadminId = $("#superadminId").val();
//     var old_password = $("#old_password").val();
//     //var url = 'admin//checkoldpassword';
//     var res = '';
//     $.ajax({
//       type: "POST",
//       url: "checkoldpassword",
//       data: { superadminId, old_password },
//       async: true,
//       success: function (data) {
//         alert(data)
//         if (data == 'true') {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     });
//     return res;
//   }, "Please enter correct old password value");
// });
// adminChangePassword Validate 
$('#adminChangePassword').validate({
  rules: {
    new_password: {
      required: true,
      minlength: 8
    },
    confirm_password: {
      required: true,
      minlength: 8,
      equalTo: "#new_password"
    },
    old_password: {
      required: true,
      //checkoldpassword: true
    }
  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});