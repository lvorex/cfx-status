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