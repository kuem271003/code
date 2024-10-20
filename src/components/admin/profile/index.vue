<template >
    <div class="row">
        <div class="col-lg-4">
            <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                    <div class="text-center">
                        <img class="rounded-circle p-1 bg-primary" width="220"
                            src="../../../assets/images/avatars/hp.jpg"
                            alt="User profile picture">
                    </div>
                    <h3 class="profile-username text-center">Nguyễn Hoàng Phương</h3>
                    <p class="text-muted text-center">Software Engineer</p>
                    <ul class="list-group list-group-unbordered mb-3">
                        <li class="list-group-item">
                            <b>Followers</b> <a class="float-right">1,322</a>
                        </li>
                        <li class="list-group-item">
                            <b>Following</b> <a class="float-right">243</a>
                        </li>
                        <li class="list-group-item">
                            <b>Friends</b> <a class="float-right">1,287</a>
                        </li>
                    </ul>
                    <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
                </div>
            </div>
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">About Me</h3>
                </div>
                <div class="card-body">
                    <strong><i class="fas fa-book mr-1"></i> Education</strong>
                    <p class="text-muted">
                        B.S. in Computer Science from the University of Duy Tan at Da Nang
                    </p>
                    <hr>
                    <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>
                    <p class="text-muted">Dien Tien, Dien Ban, Quang Nam, Viet Nam</p>
                    <hr>
                    <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>
                    <p class="text-muted">
                        <span class="tag tag-danger">UI Design </span>
                        <span class="tag tag-success">Coding </span>
                        <span class="tag tag-info">Javascript </span>
                        <span class="tag tag-warning">PHP </span>
                        <span class="tag tag-primary">Node.js </span>
                    </p>
                    <hr>
                    <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>
                    <p class="text-muted"> </p>
                </div>
            </div>
        </div>

        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <a href="">Cài Đặt</a>
                </div>
                <div class="card-body">
                    <form >
                        <div class="mb-3 row">
                            <label  class="col-sm-2 col-form-label">Họ và Tên</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" placeholder="Nguyễn Hoàng Phương" >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label  class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" placeholder="kuem271003@gmail.com">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label  class="col-sm-2 col-form-label">Địa Chỉ</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" placeholder="Dien Tien, Dien Ban, Quang Nam, Viet Nam">
                            </div>
                        </div>
                        <div class="mb-3 row"  >
                            <label  class="col-sm-2 col-form-label">Kinh Nghiệm</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" rows="3" placeholder="Cập nhật kinh nghệm"></textarea>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label  class="col-sm-2 col-form-label">Kỹ Năng</label>
                            <div class="col-sm-10 ">
                              <input type="text" class="form-control" placeholder="Php, js, C#">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-right">
                    <button type="submit" class="btn btn-danger">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>