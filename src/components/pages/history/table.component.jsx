import React, {Component} from 'react';
import {Alert, Table} from "rsuite";
import DataService from "../../../services/data.service";
const { Column, HeaderCell, Cell, Pagination } = Table;

class TableComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            displayLength: 10,
            loading: true,
            page: 1
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleLengthChange = this.handleLengthChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    handlePageChange(dataKey) {
        this.setState({
            page: dataKey
        });
    }

    handleLengthChange(dataKey) {
        this.setState({
            page: 1,
            displayLength: dataKey
        });
    }

    getData() {
        const { displayLength, page, data } = this.state;
        if (data) {
            return data.filter((v, i) => {
                const start = displayLength * (page - 1);
                const end = start + displayLength;
                return i >= start && i < end;
            });
        }

    }

    async componentDidMount() {
        await DataService.getAllGlobal().then(
            res => {
                this.setState({
                    data: res.data
                });
            },
            err => {
                const resMessage =
                    (err.response &&
                        err.response.data &&
                        err.response.data.message) ||
                    err.message ||
                    err.toString();

                Alert.error(resMessage);
            }
        )
        if (this.state.data) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { data, loading, displayLength, page } = this.state;
        const filteredData = this.getData();
        if (filteredData && data) {
            return (
                <div>
                    <Table height={620} data={filteredData} loading={loading}>
                        <Column width={200} align="center" resizable>
                            <HeaderCell>Time</HeaderCell>
                            <Cell dataKey="Time" />
                        </Column>
                        <Column align="center" flexGrow={1}>
                            <HeaderCell>Temperature</HeaderCell>
                            <Cell dataKey="Temperature" />
                        </Column>
                        <Column align="center" flexGrow={2}>
                            <HeaderCell>Humidity Percentage</HeaderCell>
                            <Cell dataKey="HumidityPercentage" />
                        </Column>
                        <Column align="center" flexGrow={3}>
                            <HeaderCell>Moisture Percentage</HeaderCell>
                            <Cell dataKey="MoisturePercentage" />
                        </Column>
                        <Column align="center" flexGrow={4}>
                            <HeaderCell>Light Index</HeaderCell>
                            <Cell dataKey="LightIndex" />
                        </Column>
                    </Table>

                    <Pagination
                        lengthMenu={[
                            {
                                value: 10,
                                label: 10
                            },
                            {
                                value: 20,
                                label: 20
                            },
                            {
                                value: 50,
                                label: 50
                            },
                            {
                                value: 100,
                                label: 100
                            }
                        ]}
                        activePage={page}
                        displayLength={displayLength}
                        total={data.length}
                        onChangePage={this.handlePageChange}
                        onChangeLength={this.handleLengthChange}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <Table height={820} data={data} loading={true}>
                        <Column width={200} align="center" resizable>
                            <HeaderCell>Time</HeaderCell>
                            <Cell dataKey="Time" />
                        </Column>
                        <Column align="center" flexGrow={1}>
                            <HeaderCell>Temperature</HeaderCell>
                            <Cell dataKey="Temperature" />
                        </Column>
                        <Column align="center" flexGrow={2}>
                            <HeaderCell>Humidity Percentage</HeaderCell>
                            <Cell dataKey="HumidityPercentage" />
                        </Column>
                        <Column align="center" flexGrow={3}>
                            <HeaderCell>Moisture Percentage</HeaderCell>
                            <Cell dataKey="MoisturePercentage" />
                        </Column>
                        <Column align="center" flexGrow={4}>
                            <HeaderCell>Light Index</HeaderCell>
                            <Cell dataKey="LightIndex" />
                        </Column>
                    </Table>

                    <Pagination
                        lengthMenu={[
                            {
                                value: 10,
                                label: 10
                            },
                            {
                                value: 20,
                                label: 20
                            },
                            {
                                value: 50,
                                label: 50
                            },
                            {
                                value: 100,
                                label: 100
                            }
                        ]}
                        activePage={page}
                        displayLength={displayLength}
                        total={data.length}
                        onChangePage={this.handlePageChange}
                        onChangeLength={this.handleLengthChange}
                    />
                </div>
            );
        }

    }
}

export default TableComponent;
