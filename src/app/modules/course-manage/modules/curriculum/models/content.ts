export interface Content{
  id?:string
  title?: string
  description?: string
  type_status?: number
  //type_status 0:lecture 1:quiz 2:coding
  course_id?:string
  instructor_id?: string
  create_date_seconds? : number
  is_deleted?:Boolean
}
