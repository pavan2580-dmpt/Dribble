import { graph, config } from '@grafbase/sdk'

const g = graph.Standalone()




const Project = g.type('Project',{
  title:g.string(),
  description : g.string(),
  image:g.url(),
  liveSiteUrl : g.url(),
  githunUrl : g.url(),
  category : g.string(),
  createdBy:g.string()
})

const User = g.type('User', {
  name : g.string(),
  Email:g.email(),
  avatarUrl :g.url(),
  description :g.string().optional(),
  githubUrl : g.url().optional(),
  linkedinUrl :g.url().optional(),
  projects:g.ref(Project).list().optional(),
})


export default config({
  graph: g
})