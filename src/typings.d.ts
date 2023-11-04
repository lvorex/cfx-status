export interface CurrentStatus {
    page: {
        id: string,
        name: string,
        url: string,
        time_zone: string,
        updated_at: string
    },
    status: {
        indicator: "none" | "minor" | "major" | "critical", 
        description: string
    }
}

export interface CfxComponent {
    id: string,
    name: string,
    status: "operational" | "degraded_performance" | "partial_outage" | "major_outage",
    created_at: string,
    updated_at: string,
    position: number,
    description: string,
    showcase: boolean,
    start_date: string,
    group_id: string,
    page_id: string,
    group: boolean,
    only_show_if_degraded: boolean,
    components?: string[]
}

export default class CFXStatus {
    public components: Promise<CfxComponent[]>
    public currentStatus: Promise<CurrentStatus>
    constructor() {
        const components = this.getComponents()
        const currentStatus = this.getCurrentStatus()
        if (!components) throw Error("Expected an error while getting cfx.re components. Please make sure your internet connection is good.")
        if (!currentStatus) throw Error("Expected an error while getting cfx.re current status. Please make sure your internet connection is good.")
        this.components = components
        this.currentStatus = currentStatus
    }

    public getCurrentStatus = async (): Promise<CurrentStatus> => {
        const result = await axios.get(`https://status.cfx.re/api/v2/status.json`).catch(err => { throw Error(err) })
        return result.data as CurrentStatus
    }

    public getComponents = async (): Promise<CfxComponent[]> => {
        const result = await axios.get(`https://status.cfx.re/api/v2/components.json`).catch(err => { throw Error(err) })
        const cfxComponents: CfxComponent[] = result.data.components
        return cfxComponents
    }

    public getComponentById = async (id: string): Promise<CfxComponent | undefined> => {
        const components = await this.getComponents()
        const wantedComponent = components.find(c => c.id === id)
        return wantedComponent
    }

    public getComponentByName = async (name: string): Promise<CfxComponent | undefined> => {
        const components = await this.getComponents()
        const wantedComponent = components.find(c => c.name === name)
        return wantedComponent
    }
}