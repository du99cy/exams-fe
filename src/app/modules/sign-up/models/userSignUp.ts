export interface UserSignUp{
  first_name: string
  last_name: string
  email: string
  enabled?: boolean
  locked?: boolean
  role_id?: string
  password: string
}
