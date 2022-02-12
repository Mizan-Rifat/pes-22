<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller {


    public function index() {
        return Permission::all();
    }
    public function store(Request $request) {
        Validator::make($request->all(), [
            'name' => [
                'required', 'string',
                Rule::unique(Permission::class)
            ],
        ])->validate();


        $permission = Permission::create(['name' => $request->name]);
        return $permission;
    }

    public function show(Permission $permission) {
        return $permission;
    }
    public function update(Request $request, Permission $permission) {
        //
    }
    public function destroy(Permission $permission) {
        return $permission->delete();
    }
}
