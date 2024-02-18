import { graph, config } from '@grafbase/sdk'

const g = graph.Standalone()




const Project = g.type('Project',{
  title:g.string(),
  description : g.string(),
  image:g.string(),
  liveSiteUrl : g.string(),
  githunUrl : g.string(),
  category : g.string(),
  createdBy:g.string()
})

const User = g.type('User', {
  name : g.string(),
  Email:g.string(),
  avatarUrl :g.string(),
  description :g.string().optional(),
  githubUrl : g.string().optional(),
  linkedinUrl :g.string().optional(),
  projects:g.ref(Project).list().optional(),
})


export default config({
  graph: g
})