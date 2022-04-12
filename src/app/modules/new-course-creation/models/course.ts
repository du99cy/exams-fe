export interface Course{
    id?:string
    title?:string
    knowleages_will_learn?:Array<string>
    prerequisites? :Array<string>
    description?:string
    who_course_is_for?:Array<string>
    instructor_id?:string
    order_contents? :Array<string>
    is_published?:boolean
    category?:string
    created_date_seconds?:number
    status?:number
}
