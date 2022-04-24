import { Parameter } from "@modules/course-manage/modules/curriculum/models/parameter"

export interface TestcaseCheck{
    id?:string
    inputs?:Array<Parameter>
    user_output?:string
    expected_output?:string
    score?:number
    exception?:string
    passed?:boolean
    locked?:boolean
}
