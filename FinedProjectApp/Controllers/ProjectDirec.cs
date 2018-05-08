using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ProjectDir
/// </summary>
public class ProjectDirec
{
    /*
         * Project Director personal details
         */
    //Project Director profile nickname.
    [Key]
    public string UserName { get; set; }
    
    //Project Director password
    [Required]
    public string Password { get; set; }

    [Required]
    public string Email { get; set; }
    //Project Director first name
    [Required]
    public string FirstName { get; set; }
    //Project Director last name
    [Required]
    public string LastName { get; set; }
    //Project Director gender: male/female

    /*
     * Project Director professional information
     */


    //Locations where Project Director is available for meating.
    [Required]
    public string Location { get; set; }

    //Project Director preference in fild of project: industry/ reserch 
    [Required]
    public string FieldOfProject { get; set; }

    //days where Project Director is free for working on project.
    [Required]
    public string FreeDays { get; set; }

    //amount of days that the Project Director wants to meet a month.
    [Required]
    public string AmountOfDays { get; set; }

    //programming languages that Project Director demands 
    [Required]
    public string ProgrammingLanguage { get; set; }

    //technologies which are used by the Project Director in the project
    [Required]
    public string Technology { get; set; }

    // Description of the project
    [Required]
    public string ProjectDescription { get; set; }

    // attached file which describes the project
    public string ProjectDescriptionFile { get; set; }



}